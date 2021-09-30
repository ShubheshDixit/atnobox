import { collection, DocumentData, getDocs, query, QueryDocumentSnapshot, QuerySnapshot, where } from '@firebase/firestore'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputField } from './inputs'

export default function PopUp(props: any) {

    return (
        <div className="h-screen w-screen bg-black bg-opacity-70 fixed top-0 left-0 flex px-6 py-4 justify-center items-center">
            <div className="relative w-full max-w-screen-sm h-full sm:h-3/4 rounded-md bg-bg-dark shadow-lg drop-shadow-sm flex flex-col justify-start items-center px-4 py-6">
                <button className="absolute bg-bg-black h-16 w-16 -top-5 -right-5 shadow-xl drop-shadow-xl rounded-full" onClick={()=>{
                    props.onBackPressed()
                }}><FontAwesomeIcon icon={faTimes}/></button>
                <InputField placeholder="Search folder"></InputField>
                <div className="h-full bg-primary-light bg-opacity-5 w-full rounded-md">
                    {props.folders && props.folders.map((e: DocumentData) => {
                        <div className="w-full flex flex-col justify-start items-center p-4" key={e.id}>
                            <h1 className="w-full overflow-ellipsis text-primary-light text-xl font-bold">{e.title}</h1>
                        </div>
                    })}
                    <div className="w-full flex flex-col justify-start items-center p-4">
                        <h1 className="w-full overflow-ellipsis text-primary-light text-xl font-bold">Loading</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


