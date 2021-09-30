import { DocumentData, getDocs, QueryDocumentSnapshot } from '@firebase/firestore'
import { collection, query, QuerySnapshot, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase_client'
import FileTile from '../components/FileTile'

export default function FilesView() {
    const [files, setFiles] = useState<QueryDocumentSnapshot<DocumentData>[] | null>(null)

    useEffect(() => {
        getLinks()
    }, [files])

    async function getLinks() {
        if(files == null) {
           var docsSnap:QuerySnapshot = await getDocs(query(collection(db, 'files'), where('userId', '==', auth.currentUser?.uid)))
           setFiles(docsSnap.docs)
           console.log(docsSnap.docs)
        }
    }

    return (
        <div className="w-full my-0 grid grid-cols-1 md:grid-cols-2 gap-4">
            {files && files.map((e)=>{
                return (
                        <FileTile data={e.data()} key={e.id}></FileTile>
                    )
                })
            }
        </div>
    )
}
