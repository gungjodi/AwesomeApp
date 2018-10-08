import firebase from 'react-native-firebase';
import { call } from 'redux-saga/effects';

const usersCollection = firebase.firestore().collection('users');

const userModel= {    
    fetchUsers : function* (){
        return yield call([usersCollection, usersCollection.get]);
    }
}

export default userModel;