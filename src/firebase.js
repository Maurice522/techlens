import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Timestamp, arrayUnion, getFirestore, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";
import {
  doc,
  getDocs,
  updateDoc,
  query,
  where,
  setDoc,
  collection,
  getDoc,
} from "firebase/firestore";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZ_53Fn54CEtAiRXu5G409s0m0i8iCkpQ",
  authDomain: "digitaldrama-522.firebaseapp.com",
  projectId: "digitaldrama-522",
  storageBucket: "digitaldrama-522.appspot.com",
  messagingSenderId: "771897868735",
  appId: "1:771897868735:web:385ee49958efdeb405610a",
  measurementId: "G-N9099TTEXT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, analytics,storage };

export const getUserFromDatabase = async (email) => {
  //let User;
  const docRef = doc(db, "Users", email);
  const docSnap = await getDoc(docRef);
  //console.log(docSnap.data(), "docSnap");
  return docSnap.data();
};

export const getUserDocByRef = async (DocumentReference) => {
  const userDocSnapshot = await getDoc(DocumentReference);
  return userDocSnapshot.data();
}


export const getBlogs = async () => {
  let result=[];
  await (
    await getDocs(
      collection(db, "Blogs"), orderBy("createdAt", "desc")
    )
  ).forEach((doc) => {
    // console.log(doc.data())
    result.push({id: doc.id , ...doc.data()});
  });
  result.map(item=>{
    console.log(item.createdAt.seconds)
  })
  result.sort(function(a, b){return a.createdAt.seconds - b.createdAt.seconds});
  // result.sort(function(a, b){return a.createdAt.nanoseconds - b.createdAt.nanoseconds});
  result.reverse();
  console.log('sorted!!')
  result.map(item=>{
    console.log(item.createdAt.seconds)
  })
  return result;
};

export const getBlog = async (heading,setdata) => {
  // console.log(heading)
  let result=false;
  (
    await getDocs(
      collection(db, "Blogs")
    )
  ).forEach((doc) => {
    // console.log(doc.data())
    // result.push({id: doc.id , ...doc.data()});
    var data = doc.data();
    if(data.heading[data.heading.length-1]=='?'){
      data.heading =data.heading.substring(0, data.heading.length-1)
      // console.log(data.heading.length)
    }
    // console.log(data.heading , heading)
    // console.log(data.heading.length , heading.length)
    if( data.heading == heading){
      setdata(data)
      result = data;
      // console.log(data)
    }
  });
  
  return result;
};



export const getMentorFromDatabase = async (email) => {
  let Mentor;
  await (
    await getDocs(
      query(collection(db, "Users"), where("email", "==", `${email}`))
    )
  ).forEach((doc) => {
    Mentor = { ...doc.data() };
  });
  return Mentor;
};

export const getMentorMsgs = async (email) => {
  try {
    let clients = [];

    await (
      await getDocs(collection(db, `Messages/${email}/YourClients`))
    ).forEach((doc) => {
      clients.push({ ...doc.data(), email: doc.id });
    });

    console.log(clients);
    return clients;
  } catch (err) {
    console.log("Err: ", err);
  }
};

export const getClientMsgs = async (email) => {
  try {
    let clients = [];

    await (
      await getDocs(collection(db, `Messages/${email}/YourMentors`))
    ).forEach((doc) => {
      clients.push({ ...doc.data(), email: doc.id });
    });
    return clients;
  } catch (err) {
    console.log("Err: ", err);
  }
};

export const addMsgsInMentorDatabase = async (
  mentorEmail,
  clientEmail,
  data
) => {
  try {
    return await setDoc(
      doc(db, `Messages/${mentorEmail}/YourClients`, `${clientEmail}`),
      data
    );
  } catch (err) {
    console.log("Err: ", err);
  }
};

export const addMsgsInClientDatabase = async (
  clientEmail,
  mentorEmail,
  data
) => {
  try {
    return await setDoc(
      doc(db, `Messages/${clientEmail}/YourMentors`, `${mentorEmail}`),
      data
    );
  } catch (err) {
    console.log("Err: ", err);
  }
};

export const updateMsgsInMentorDatabase = async (
  mentorEmail,
  clientEmail,
  updatedData
) => {
  try {
    const docRef = `Messages/${mentorEmail}/YourClients`;
    return await updateDoc(doc(db, docRef, clientEmail), updatedData);
  } catch (err) {
    console.log("Err: ", err);
  }
};

export const updateMsgsInClientDatabase = async (
  clientEmail,
  mentorEmail,
  updatedData
) => {
  try {
    const docRef = `Messages/${clientEmail}/YourMentors`;
    return await updateDoc(doc(db, docRef, mentorEmail), updatedData);
  } catch (err) {
    console.log("Err: ", err);
  }
};

export const uploadMedia = async (media, path) => {
  try {
    await uploadBytesResumable(ref(storage, `${path}/${media.name}`), media);
    const getMedia = await ref(storage, `${path}/${media.name}`);
    const mediaLink = await getDownloadURL(getMedia);
    return mediaLink;
  } catch (err) {
    console.log("Err: ", err);
    
  }
};


export const getAllUserHavingChatWith = async (currentcUser, setList) => {
  const list = [];
  const ref = doc(db, "Messages", currentcUser.email);
  const c = collection(
    ref,
    currentcUser && currentcUser.userType === "Mentor"
      ? "YourClients"
      : "YourMentors"
  );

  const f = collection(ref, "Networks");

  const snap = await getDocs(f);
  onSnapshot(f, (snapshot) => {
    const dummyList = [];
    snapshot.docs.forEach((doc) => {
      dummyList.push({ ...doc.data(), id: doc.id, bucket: "Networks" });
    });

    setList(dummyList);
  });

  const querySnapshot = await getDocs(c);
  //SNAPSHOT IMPLEMENT
  onSnapshot(c, (snapshot) => {
    const dummyList = [];
    snapshot.docs.forEach((doc) => {
      dummyList.push({
        ...doc.data(),
        id: doc.id,
        bucket:
          currentcUser && currentcUser.userType === "Mentor"
            ? "YourClients"
            : "YourMentors",
      });
    });

    setList(dummyList);
  });
};

export const createNetworkInMessagesDoc=async(userId,senderId)=>{
const userRef=doc(db,"Messages",userId)
const furtherUserRef=doc(userRef,"Networks",senderId)
const senderRef=doc(db,"Messages",senderId)
const furtherSenderRef=doc(senderRef,"Networks",userId)

try {
  await setDoc(furtherUserRef,{messages: [{createdAt: '',msg: '',sendBy: '',},]})
  await setDoc(furtherSenderRef,{messages: [{createdAt: '',msg: '',sendBy: '',},]})
} catch (error) {
  console.log(error.messages)
}
}

export const createMentorInMessagesDoc=async(userId,mentorId)=>{
  const userRef=doc(db,"Messages",userId)
  const furtherUserRef=doc(userRef,"YourMentors",mentorId)
  const mentorRef=doc(db,"Messages",mentorId)
  const furtherMentorRef=doc(mentorRef,"YourClients",userId)
  
  try {
    await setDoc(furtherUserRef,{messages: [{createdAt: '',msg: '',sendBy: ''}]})
    await setDoc(furtherMentorRef,{messages: [{createdAt: '',msg: '',sendBy: ''}]})
  } catch (error) {
    console.log(error.messages)
  }
  }

export const SendMessage = async (
  currentcUser,
  sendTo,
  message,
  imgLink,
  bucket
) => {
  const senderRef = doc(db, "Messages", currentcUser.email);
  let furtherSenderRef;
  if (bucket === "YourClients" || bucket === "YourMentors") {
    furtherSenderRef = doc(
      senderRef,
      currentcUser && currentcUser.userType === "Mentor"
        ? "YourClients"
        : "YourMentors",
      sendTo.email
    );
  } else if (bucket === "Networks") {
    furtherSenderRef = doc(senderRef, "Networks", sendTo.email);
  }
  const receiverRef = doc(db, "Messages", sendTo.email);
  let furtherReceiverRef;
  if (bucket === "YourClients" || bucket === "YourMentors") {
    furtherReceiverRef = doc(
      receiverRef,
      sendTo && sendTo.userType === "Mentor" ? "YourClients" : "YourMentors",
      currentcUser.email
    );
  } else if (bucket === "Networks") {
    furtherReceiverRef = doc(receiverRef, "Networks", currentcUser.email);
  }

  let timestmp = Timestamp.now();

  try {
    await updateDoc(furtherSenderRef, {
      messages: arrayUnion({
        msg: message,
        createdAt: timestmp,
        sendBy: currentcUser.email,
        imgMsg: imgLink,
      }),
    });

    // ref.current.scrollTo({
    //   top:ref.current.scrollHeight,
    //   behavior:"smooth"
    // });

    await updateDoc(furtherReceiverRef, {
      messages: arrayUnion({
        msg: message,
        createdAt: timestmp,
        sendBy: currentcUser.email,
        imgMsg: imgLink,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const ReciveMessage = async (currentcUser, sendTo, setmsg, bucket) => {
  try {
    const docRef = doc(db, "Messages", currentcUser.email);
    const furtherdocRef = collection(docRef, bucket);

    onSnapshot(furtherdocRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.id === sendTo.email) {
          setmsg(doc.data().messages);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendNotification = async (toemail, fromemail, messaage) => {
  const obj = {
    subject: fromemail,
    message: messaage,
    email: toemail,
    type: "chat",
    date: serverTimestamp(),
  };

  const docRef = doc(db, "Users", toemail);

  try {
    await updateDoc(docRef, {
      notifications: arrayUnion(obj),
    });
  } catch (error) {
    console.log(error);
  }
};