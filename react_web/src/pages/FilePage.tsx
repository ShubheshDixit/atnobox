import { DocumentData, DocumentSnapshot, getDoc, QueryDocumentSnapshot } from '@firebase/firestore';
import { faArrowLeft, faDownload, faEdit, faFolderOpen, faShare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { collection, doc, getDocs, query, QuerySnapshot, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../components/buttons';
import PopUp from '../components/pop_up';
import { auth, db } from '../firebase_client';

export default function FilePage() {
    const { id } = useParams<{id?: string}>();
    const [file, setFile] = useState<DocumentSnapshot<DocumentData> | null>(null)
    const [showPopUp, setPopUp] = useState<boolean>(false)
    const [folders, setFolders] = useState<QueryDocumentSnapshot<DocumentData>[] | null>(null)

    useEffect(() => {
        getFileDetails()
        getFolders()

        return () => {
            getFileDetails()
            getFolders()
        }
    }, [file, folders])

    async function getFileDetails() {
        if(file == null) {
            var docSnap:DocumentSnapshot<DocumentData> = await getDoc(doc(db, 'files/' + id))
            setFile(docSnap)
        }
    }

    async function getFolders() {
        if(folders == null) {
           var docsSnap:QuerySnapshot<DocumentData> = await getDocs(query(collection(db, 'folders'), where('userId', '==', auth.currentUser?.uid)))
           console.log(docsSnap.docs.length)
           setFolders(docsSnap.docs)
        }
    }

    return (
        <div className="w-full h-full flex flex-col justify-start items-center overflow-x-auto">
            <div className="bg-bg-black w-full py-8 justify-center itesms-center flex px-4">
                <div className="max-w-screen-md flex flex-row justify-start w-full items-center">
                    <Link to="/files" className="h-12 w-12 flex justify-center items-center bg-primary-light bg-opacity-10 rounded-full"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link>
                    <h2 className="font-bold text-xl ml-4">File View</h2>
                </div>
            </div>

            <div className="w-full justify-start items-center flex flex-col max-w-screen-md p-4 h-full overflow-x-scroll">
                <div className="flex flex-col justify-center items-center my-4 h-full">
                    <img src={file?.data()?.mediaURL} alt="" className="w-64 h-auto self-center"/>
                    <h1 className="text-xl text-center text-primary-light font-bold my-4">{ file?.data()?.title }</h1>
                    <p className="text-center">{file?.data()?.description}</p>
                    <div className="flex justify-center items-center py-4 self-center">
                        <a href={file?.data()?.mediaURL}><PrimaryButton><FontAwesomeIcon icon={faDownload} className="mr-2"/> Download File</PrimaryButton></a>
                        <SecondaryButton><FontAwesomeIcon icon={faShare} className="mr-2"/> Share Link</SecondaryButton>
                    </div>
                </div>
                {file?.data()?.userId == auth.currentUser?.uid ? 
                    <div className="w-full max-w-screen-md flex justify-center items-center flex-row p-4 border-t-2 border-primary-light border-opacity-10 border-dashed">
                        <div className="w-full flex flex-col sm:flex-row justify-center items-center p-4">
                            <SecondaryButton className="border-primary-light text-primary-light border-2 px-4 py-2 h-12 rounded-md font-bold sm:mr-4 my-4" onClick={()=>{ setPopUp(true) }}><FontAwesomeIcon icon={faFolderOpen} className="mr-2"/> Move to Folder</SecondaryButton>
                            <SecondaryButton className="border-yellow-300 text-yellow-300 border-2 px-4 py-2 h-12 rounded-md font-bold sm:mr-4 my-4"><FontAwesomeIcon icon={faEdit} className="mr-2" size="1x"></FontAwesomeIcon> Edit File</SecondaryButton>
                            <SecondaryButton className="border-red-500 text-red-500 border-2 px-4 py-2 h-12 rounded-md font-bold my-4"><FontAwesomeIcon icon={faTrash} className="mr-2" size="1x"></FontAwesomeIcon> Remove File</SecondaryButton>
                        </div>
                    </div>: null
                }
            </div> 
            {folders && folders.map((e)=>{
                <div>
                    <h1>{e.data().id}</h1>
                </div>
            })}

            {showPopUp ?
                <PopUp 
                    onBackPressed={()=>{
                        setPopUp(false)
                    }}
                    folders={folders}>
                </PopUp>:null}

        </div>
    )
}
