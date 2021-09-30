import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, DocumentData, getDocs, query, QueryDocumentSnapshot, QuerySnapshot, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from '../firebase_client'

export default function FoldersView() {
    const [folders, setFolders] = useState<QueryDocumentSnapshot<DocumentData>[] | null>(null)

    useEffect(() => {
        getFolders()
    }, [folders])

    async function getFolders() {
        if(folders == null) {
           var docsSnap:QuerySnapshot = await getDocs(query(collection(db, 'folders'), where('userId', '==', auth.currentUser?.uid)))
           setFolders(docsSnap.docs)
        }
    }

    return (
        <div className="w-full grid my-0 grid-cols-1 md:grid-cols-2 gap-4">
            {folders && folders.map((e)=>{
                return(
                    <Link to={`/folder/${e.id}`} className="bg-primary-light bg-opacity-5 rounded-md p-4 flex flex-row justify-center items-center hover:bg-opacity-20" key={e.id}>
                        <FontAwesomeIcon icon={faFolder} className="text-primary-light mr-4" size="2x"/>
                        <div className="flex flex-col justify-center items-start">
                            <h2 className="text-primary-light text-lg font-bold">{e.data().title}</h2>
                            <p className="w-full overflow-ellipsis">{e.data().description}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
