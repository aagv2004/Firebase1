import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {db} from "./firebase.js"

export const registrarPersona = async(persona) => {
    console.log(persona);
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "personas"), persona);
}