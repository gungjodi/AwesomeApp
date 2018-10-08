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
import Spinner from 'react-native-loading-spinner-overlay';
import {actionTypes} from '../actionsTypes.constants';

class Home extends Component{
    componentDidMount()
    {
        const { onRequestPeople } = this.props;
        onRequestPeople();
    }

    render() {
        const { fetching,onRequestPeople, people,error } = this.props;
        return (
                <View style={styles.container}>
                    <Spinner visible={fetching} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
                    <View style={styles.listContainer}>  
                        {
                            people && 
                            (
                                <FlatList
                                    data={people.results}
                                    renderItem={
                                        ({item}) =>(
                                            <TouchableOpacity style={styles.item} onPress={()=>this.props.navigation.navigate('PeopleDetail',{peopleUrl:item.url})}>
                                                <Text>{item.name}</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                    keyExtractor={item => item.url}
                                    ItemSeparatorComponent={this.renderSeparator}
                                />
                            )
                        }
                    </View>
                    <View style={styles.footerContainer}>
                        <View style={styles.pagingContainer}>
                            {
                                people && ( 
                                        <TouchableOpacity style={styles.headerButton} disabled={people.previous?false:true} onPress={()=>onRequestPeople(people.previous)}>
                                                <Text style={!people.previous && {color:'grey'}}>Prev</Text>
                                        </TouchableOpacity>
                                )
                            }
                            {
                                people && ( 
                                        <TouchableOpacity style={styles.headerButton} disabled={people.next?false:true} onPress={()=>onRequestPeople(people.next)}>
                                                <Text style={!people.next && {color:'grey'}}>Next</Text>
                                        </TouchableOpacity>
                                )
                            }
                        </View>
                    </View>
                </View>
        );
    }

    renderSeparator = () => {
        return (
          <View style={styles.separator}/>
        );
    };
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    separator:{
        height: 1,
        backgroundColor: '#CED0CE',
    },
    listContainer:{
        flex:0.91
    },
    footerContainer:{
        flex:0.09,
    },
    item: {
        padding: 10,
        height:60,
        justifyContent: 'center'
    },
    pagingContainer:
    {
        flex:1,
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent:'space-between',
        backgroundColor:'#ccc'
    },
    headerButton:{
        justifyContent: 'center',
        padding:10,
        alignItems: 'center'
    }
});

const mapStateToProps = state => {
    return {
        fetching: state.people.fetching,
        people: state.people.people,
        error: state.people.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestPeople: (url) => dispatch({ type: actionTypes.FETCH_PEOPLE,url:url}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);