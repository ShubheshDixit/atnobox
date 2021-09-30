import { DocumentData, DocumentSnapshot, getDoc, getDocs, QueryDocumentSnapshot, where } from '@firebase/firestore';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { collection, doc, query, QuerySnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import LinkTile from '../components/LinkTile';
import { auth, db } from '../firebase_client';
import { removeLink } from '../services/db_utils';

export default function FolderPage() {
    const { id } = useParams<{id?: string}>();
    const [folder, setFolder] = useState<DocumentSnapshot<DocumentData> | null>(null)
    const [files, setFiles] = useState<QueryDocumentSnapshot<DocumentData>[] | null>(null)

    useEffect(() => {
        getFolderDetails()
        getFolderFiles()
    }, [files])

    async function getFolderDetails() {
        if(files == null) {
           var docSnap:DocumentSnapshot<DocumentData> = await getDoc(doc(db, 'folders/' + id))
           setFolder(docSnap)
        }
    }

    async function getFolderFiles() {
        if(files == null) {
           var docsSnap:QuerySnapshot = await getDocs(query(collection(db, 'files'), where('userId', '==', auth.currentUser?.uid), where('folderId', '==', id)))
           setFiles(docsSnap.docs)
        }
    }
    return (
        <div className="w-full h-full flex flex-col justify-start items-center overflow-x-auto">
            <div className="bg-bg-black w-full py-8 justify-center itesms-center flex px-4">
                <div className="max-w-screen-md flex flex-row justify-start w-full items-center">
                    <Link to="/files" className="h-12 w-12 flex justify-center items-center bg-primary-light bg-opacity-10 rounded-full"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Link>
                    <h2 className="font-bold text-xl ml-4">Folder View</h2>
                </div>
            </div>
            <div className="w-full justify-start items-center flex flex-col max-w-screen-md p-4">
                <div className="flex flex-col justify-center items-center my-4 max-w-md">
                    <img src={folder?.data()?.imageURL} alt="" className="w-64 h-auto"/>
                    <h1 className="text-4xl text-primary-light font-bold my-4">{ folder?.data()?.title }</h1>
                    <p className="text-center">{folder?.data()?.description}</p>
                </div>
                <div className="w-full my-8 border-t-2 border-primary-light border-dashed border-opacity-40 py-4">
                    {files && files.map((e)=>{
                        return (
                            <LinkTile key={e.id}  data={e.data()} onClick={async ()=>{
                                await removeLink(e.id)
                                setFiles(null)
                            }}></LinkTile>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
