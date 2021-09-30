import { GoogleAuthProvider, signInWithPopup, UserCredential } from "@firebase/auth";
import { DocumentSnapshot, getDoc, doc, setDoc } from "@firebase/firestore";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, db, provider } from "../firebase_client";

function SignInButton() {
    return (
        <button className="flex flex-row bg-white rounded-md justify-center items-center px-4 py-2 hover:bg-gray-200 hover:shadow-md text-black"
            onClick={() => {
                signInWithPopup(auth, provider).then( async (userCred: UserCredential) => {
                    var userDoc:DocumentSnapshot = await getDoc(doc(db, 'users/' + userCred.user.uid));
                    console.log(userDoc.exists())
                    if(!userDoc.exists()) {
                        setDoc(userDoc.ref, {
                            'displayName': userCred.user.displayName,
                            'email': userCred.user.email,
                            'photoURL': userCred.user.photoURL,
                            'uid': userCred.user.uid,
                        })
                    }
                })
            }}
        >
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
          <h3 className="pl-2 font-bold">Sign In With Google</h3>  
        </button>
    );
}

export default SignInButton;