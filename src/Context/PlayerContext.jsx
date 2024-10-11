import { createContext, useEffect, useRef, useState } from "react";
import { fav_Songs, atif_Songs, kk_Songs, rahat_Songs, honey_Songs } from "../assets/assests";

 export const PlayerContext = createContext()

const PlayerContextProvider  = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track , setTrack] = useState(fav_Songs[0])
    const [playStatus , setPlayStatus] = useState(false)
    const [album, setAlbum] = useState("Favorites"); // default album
    const [songs, setSongs] = useState(fav_Songs); // songs of selected album
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);


    const [time , setTime] = useState({
        currentTime:{
            second:0,
            minute:0,
        },
        totalTime:{
            second:0,
            minute:0,
        }
    })

    useEffect(() => {
        if (audioRef.current && track) {
            audioRef.current.src = track.file; // Set the audio source
            audioRef.current.play(); // Play the track
            setPlayStatus(true); // Set play status
        }
    }, [track]); // This ensures the effect runs when track is updated

    const play = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setPlayStatus(true);
        }
    };

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }


    // const playNext = async () => {
    //     const nextIndex = (currentTrackIndex + 1) % songs.length; // Loop back to the first song if at the end
    //     const nextTrack = songs[nextIndex];
    //     await setTrack(nextTrack);
    //     setCurrentTrackIndex(nextIndex); // Update the current track index
    //     audioRef.current.src = nextTrack.file;
    //     await audioRef.current.play();
    //     setPlayStatus(true);
    // };
   

    const playNext = async () => {
        const nextIndex = (currentTrackIndex + 1) % songs.length; // Loop back to the first song if at the end
        await playTrack(nextIndex);
    };

    const playPrevious = async () => {
        const prevIndex = (currentTrackIndex - 1 + songs.length) % songs.length; // Loop to the last song if at the start
        await playTrack(prevIndex);
    };
   
    const playWithId = async (id) => {
        const selectedTrack = songs[id]; // Get track from current album
        await setTrack(selectedTrack);
        setCurrentTrackIndex(id);
        audioRef.current.src = selectedTrack.file;
        await audioRef.current.play();
        setPlayStatus(true);
    };

   


    const selectAlbum = (albumName) => {
        setAlbum(albumName);
        switch (albumName) {
            case "Atif Aslam Top10":
                setSongs(atif_Songs);
                break;
            case "K K Top10":
                setSongs(kk_Songs);
                break;
            case "Honey Sing Top10":
                setSongs(honey_Songs);
                break;
            case "Rahat Fateh Ali Khan Top10":
                setSongs(rahat_Songs);
                break;
            case "My Fav":
            default:
                setSongs(fav_Songs);
                break;
        }
        setCurrentTrackIndex(0);
        setTrack(songs[0]);
    };

  

    useEffect(() => {
        const handleSongEnd = () => {
            playNext(); // Automatically play next song when the current song ends
        };

        if (audioRef.current) {
            audioRef.current.addEventListener("ended", handleSongEnd);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("ended", handleSongEnd);
            }
        };
    }, [audioRef, songs]); // Listen for song end events


    const playTrack = async (index) => {
        const nextTrack = songs[index];
        await setTrack(nextTrack);
        setCurrentTrackIndex(index); // Update the current track index
        audioRef.current.src = nextTrack.file;
        await audioRef.current.play();
        setPlayStatus(true);
    };

    const shuffleSongs = () => {
        const shuffledSongs = [...songs].sort(() => Math.random() - 0.5);
        setSongs(shuffledSongs);
        setCurrentTrackIndex(0); // Reset index
        setTrack(shuffledSongs[0]); // Set the first shuffled track
    };

    const selectTrack = async (newTrack) => {
        audioRef.current.src = newTrack.file;
        await audioRef.current.play();
        setTrack(newTrack);
        
        setPlayStatus(true); // Update play status
    };


    useEffect(() => {
        setTimeout(() => {
            
            audioRef.current.ontimeupdate = () => {

                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration*100)) + "%"

                setTime({
                    currentTime:{
                        second:Math.floor(audioRef.current.currentTime % 60),
                        minute:Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime:{
                        second:Math.floor(audioRef.current.duration % 60),
                        minute:Math.floor(audioRef.current.duration / 60),
                    }
                })
            }
        } , 1000)

       
        
    } , [audioRef])


    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
        playWithId,
        selectTrack,
        selectAlbum,
        playNext,
        playPrevious, // Added previous function
        shuffleSongs, // Added shuffle function
    }

    
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )

}

export default PlayerContextProvider