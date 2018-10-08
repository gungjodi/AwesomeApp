/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import Spinner  from 'react-native-loading-spinner-overlay';

import {actionTypes} from '../actionsTypes.constants';

class PeopleDetail extends Component{
    componentDidMount()
    {
        const { onRequestPeopleDetail,error,navigation} = this.props;
        const peopleDetailUrl = navigation.getParam('peopleUrl', null);
        onRequestPeopleDetail(peopleDetailUrl);
    }
    render() {
        const { fetching,peopleDetail,error} = this.props;
        return (
            <View style={styles.container}>
                <Spinner visible={fetching} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
                {peopleDetail &&(
                    <View>
                        <View style={styles.detailItems}>
                                <Text style={styles.detailTextTitle}>Name</Text>
                                <Text style={styles.detailText}>{peopleDetail.name}</Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.detailItems}>
                                <Text style={styles.detailTextTitle}>Gender</Text>
                                <Text style={styles.detailText}>{peopleDetail.gender}</Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.detailItems}>
                                <Text style={styles.detailTextTitle}>Birth Year</Text>
                                <Text style={styles.detailText}>{peopleDetail.birth_year}</Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.detailItems}>
                                <Text style={styles.detailTextTitle}>Height/Mass</Text>
                                <Text style={styles.detailText}>{peopleDetail.height}/{peopleDetail.mass}</Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.detailItems}>
                                <Text style={styles.detailTextTitle}>Hair Color</Text>
                                <Text style={styles.detailText}>{peopleDetail.hair_color}</Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.detailItems}>
                                <Text style={styles.detailTextTitle}>Skin Color</Text>
                                <Text style={styles.detailText}>{peopleDetail.skin_color}</Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.detailItems}>
                                <Text style={styles.detailTextTitle}>Eye Color</Text>
                                <Text style={styles.detailText}>{peopleDetail.eye_color}</Text>
                        </View>
                    </View>
                )}  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },
    separator:{
        height: 1,
        backgroundColor: '#CED0CE',
    },
    detailItems:{
        flexDirection:'row',
        padding:10
    },
    detailText:{
        flex:0.7,
        fontSize : 16,
    },
    detailTextTitle:{
        fontSize : 16,
        flex:0.3
    }
});

const mapStateToProps = state => {
    return {
        fetching: state.peopleDetail.fetching,
        peopleDetail: state.peopleDetail.peopleDetail,
        error: state.peopleDetail.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestPeopleDetail: (url) => dispatch({ type: actionTypes.FETCH_PEOPLE_DETAIL,url:url}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetail);