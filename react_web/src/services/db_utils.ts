import { auth, db } from '../firebase_client';
import { setDoc, doc, deleteDoc } from '@firebase/firestore';
import { collection, DocumentData, getDocs, query, QuerySnapshot, serverTimestamp, where } from '@firebase/firestore';

async function addLink(id: String, projectId: String, url: String, imageURL: String | null, title: String,) : Promise<void> {
    await setDoc(doc(db, '/links/' + id), {
        'id': id,
        'projectId': projectId,
        'userId': auth.currentUser?.uid,
        'url': url,
        'imageURL': imageURL,
        'title': title,
        'createdAt': serverTimestamp()
   });
}

async function addProject(id: String, title: String, description: String | null, imageURL: String | null) : Promise<void> {
    await setDoc(doc(db, '/projects/' + id), {
        'id': id,
        'userId': auth.currentUser?.uid,
        'title': title,
        'imageURL': imageURL,
        'description': description,
        'createdAt': serverTimestamp()
    });
}

async function addFile(id: string, folderId: string | null, mediaURL: string | null, description: string | null, title: string,ext: string) : Promise<void> {
    await setDoc(doc(db, '/files/' + id), {
        'id': id,
        'folderId': folderId,
        'userId': auth.currentUser?.uid,
        'mediaURL': mediaURL,
        'title': title,
        'description': description,
        'ext': ext,
        'createdAt': serverTimestamp()
   });
}

async function addFolder(id: String, title: String, description: String | null, imageURL: String | null) : Promise<void> {
    await setDoc(doc(db, '/folders/' + id), {
        'id': id,
        'userId': auth.currentUser?.uid,
        'title': title,
        'imageURL': imageURL,
        'description': description,
        'createdAt': serverTimestamp()
    });
}

async function removeProject(id: String) {
    await deleteDoc(doc(db, '/projects/' + id));
    let docsSnap:QuerySnapshot<DocumentData> = await getDocs(query(collection(db, 'links'), where('projectId', '==', id)))
    docsSnap.forEach((e)=>{
        deleteDoc(e.ref);
    })
}

async function removeLink(id: String) {
    await deleteDoc(doc(db, '/links/' + id));
}

export { addLink, addProject, removeProject, removeLink, addFile, addFolder }