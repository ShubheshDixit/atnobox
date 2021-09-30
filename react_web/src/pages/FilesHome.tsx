import { signOut, User } from "@firebase/auth";
import { useEffect, useState } from "react";
import SignInButton from "../components/signInComponent";
import { auth } from "../firebase_client";
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from "../components/buttons";
import loadingImg from '../assets/Wait.png'
import filesImg from '../assets/Files.png'
import FilesView from "./FilesView";
import FoldersView from "./FoldersView";
import Support from "../components/support";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";

function FilesHome() {
    const [index, setIndex] = useState<Number>(0)
    const [loading, setLoading] = useState<Boolean>(true)
    const [user, setUser] = useState<null | User>(null)
    const history = useHistory()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
            if(user != null) {
                setUser(user)
                setLoading(false)
            }
        })
        // Unsubscribe on unmount
        return unsubscribe
    }, [])
    

    return (
    <div className="w-full h-full flex flex-col justify-start items-center overflow-x-auto">
        <div className="flex flex-col bg-bg-light justify-center items-center w-full p-6">
            <div className="flex flex-row justify-between items-center w-full max-w-screen-md">
                <h1 className="font-bold text-xl text-primary-light"><FontAwesomeIcon icon={faBox} className="mr-2" size="1x"/> AtnoBox</h1>
                <div className="hidden flex-row justify-center items-center sm:flex">
                    <Link to="/" className="p-4 h-12 flex justify-center items-center bg-primary-light mx-2 rounded-md bg-opacity-10"><h2 className="font-bold">Links</h2></Link>
                    <Link to="/files" className="p-4 flex justify-center items-center h-12 bg-primary-light mx-2 rounded-md bg-opacity-100 text-black"><h2 className="font-bold">Files</h2></Link>
                </div>
                {user != null ?
                <div className="group relative">
                    <button className="bg-red-600 px-4 py-2 rounded-md h-12 font-bold" onClick={()=>{
                        signOut(auth)
                        setUser(null)
                    }}>
                        Logout
                    </button> 
                    <div className="group-hover:flex flex-col hidden w-full justify-center items-center absolute h-0 group-hover:h-auto transition-all">
                        {user != null 
                            ? <div className="flex flex-row justify-center items-center bg-bg-light p-6 mt-2 rounded-md">
                                <img src={user.photoURL ?? ''} alt="" className="h-16 w-16 mx-4"></img>
                                <div className="flex flex-col justify-center items-start mr-4">
                                    <h1 className="font-bold text-primary-light text-xl">{user.displayName}</h1>
                                    <p>{user.email}</p>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                </div> : <SignInButton />
                }
            </div>
        </div>

       {user == null && !loading? 
            <div className="flex flex-row w-full max-w-screen-md p-4 justify-center">
                <h1 className="text-4xl font-bold">{user != null ? 'Welcome to AtnoLinks' : 'Sign in to continue'} </h1>
            </div> : null
        }

        {loading ? 
            <div className="flex flex-col w-full max-w-screen-md p-4 justify-center items-center">
                <img src={loadingImg} alt="" className="w-64 h-64"/>
                <h1 className="font-bold animate-pulse">Fetching data please wait ...</h1>
            </div> : null
        }
        
        {user != null ? 
            <div className="max-w-screen-md flex flex-col justify-center items-center py-8 w-full">
                <img src={filesImg} className="h-64 w-64 object-contain"/>
                <h1 className="font-bold text-4xl my-2">AtnoFiles</h1>
                <p className="text-xl text-center">Save and share your files from everywhere.</p>
                <div className="flex flex-row  w-full max-w-screen-md p-4 justify-center items-center">
                    <PrimaryButton onClick={()=>{ history.push('add-folder') }}>Add a new folder</PrimaryButton>
                    <SecondaryButton onClick={()=>{ history.push('add-file') }}>Add a new file</SecondaryButton>
                </div>
               
            </div> : null
         }

         {user != null ?
            <div className="w-full max-w-screen-md flex flex-col justify-center items-center p-4">

                <div className="w-full border-primary-light border-b-2 border-dashed border-opacity-25 my-4 flex flex-row border-collapse justify-center items-center">
                    <button className={`py-4 mx-4 font-bold ${index === 0 ? 'border-b-4 border-primary-light' : ''}`}  onClick={()=>{setIndex(0)}}>Folders</button>
                    <button className={`py-4 mx-4 font-bold ${index === 1 ? 'border-b-4 border-primary-light' : ''}`} onClick={()=>{setIndex(1)}}>Files</button>
                </div>
                {index == 0 ?
                    <FoldersView></FoldersView> : <FilesView></FilesView>
                }
            </div>: null
        }
        {/* <Support></Support> */}

    </div>
    );
}

export default FilesHome