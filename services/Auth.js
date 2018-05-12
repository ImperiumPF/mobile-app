import {
    Alert,
    AsyncStorage
} from 'react-native';


const URL = 'https://api.imperiumpf.me/v1';

export default {
    async fetchUsers() {
        try {
            let response = await fetch(URI + '/users');
            let responseJsonData = await response.json();
            return responseJsonData;
        } catch (e) {
            console.log(e)
        }
    },

    login() {
        fetch(URL + '/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                // body :
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                }),
            })
            .then(response => response.json())
            .then(response => {
                this.setState({
                        loading: false,
                    },
                    () => {
                        if (response.success != false) {
                            //console.log(response);
                            console.log("Tok: " + response.data.token);
                            AsyncStorage.setItem('tokenUser', response.data.token);
                            //AsyncStorage.setItem('statusUser', response.status);
                            //AsyncStorage.setItem('idUser', response.id);
                            AsyncStorage.setItem('Email', this.state.email);

                            Alert.alert(
                                'Logged in!',
                                `Login com sucesso!`,
                            );
                        } else {
                            console.log(response);
                            setTimeout(() => {
                                Alert.alert('Warning', 'Username / Password');
                            }, 100);
                        }
                    }
                );
            })
            .done();
    },

    signup() {
        fetch(URL + '/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                // body :
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                }),
            })
            .then(response => response.json())
            .then(response => {
                this.setState({
                        loading: false,
                    },
                    () => {
                        if (response.success != false) {
                            //console.log(response);


                            Alert.alert(
                                'Conta criada!',
                                `Conta criada com sucesso!`,
                            );
                        } else {
                            console.log(response);
                            setTimeout(() => {
                                Alert.alert('Erro', response.data.error);
                            }, 100);
                        }
                    }
                );
            })
            .done();
    }
}