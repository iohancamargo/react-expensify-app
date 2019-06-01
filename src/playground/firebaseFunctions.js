const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key,snapshot.val());
})

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key,snapshot.val());
})
// Chamado para cada elemento já presente e também aos adicionados
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key,snapshot.val());
})

/*
database.ref('expenses').on('value', (snapShot) =>{
    const expenses = [];
    snapshot.foreach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
})
*/

/*
database.ref('expenses')
    .once('value')
    .then((snapshot) =>{
        const expenses = [];
        snapshot.foreach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    });
*/
/*
database.ref('expenses').push({
    description: 'Gasolina',
    note: 'Gasolina no brasil é muito cara',
    amount: 40000,
    createdAt: 9999999997
});

database.ref('expenses').push({
    description: 'Almoço',
    note: 'Almoço também é caro',
    amount: 30000,
    createdAt: 9999999998
});

database.ref('expenses').push({
    description: 'Aluguel',
    note: 'Aluguel também custa muito',
    amount: 90000,
    createdAt: 9999999999
});
*/

/*
database.ref('notes').push({
    title: 'Course topics',
    body: 'React native'
});
*/

/*
const firebaseNotes = {
    notes: {
        assdxzc:{
            title: 'First note',
            body: 'this is my note'    
        },
        bssdxzc:{
            title: 'another note',
            body: 'another note'      
        }
    }
};

const notes = [
    {
        id: 12,
        title: 'First note',
        body: 'this is my note'        
    },
    {
        id: 12,
        title: 'another note',
        body: 'another note'        
    }
];
//database.ref('notes').set(notes);
*/


/*
const onValueChange = database.ref().on('value', (snapshot) => {
    //console.log(snapshot.val());
    printInfo();
}, (e) => {
    console.log('Erro ao obter valores', e);
});

const printInfo = () => {
    database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val.name + ' is a ' + val.job.title + ' at ' + val.location.city);
    })
    .catch((err) => {
        console.log('Error get data',err);
    });
};

database.ref('age').set(26).then(() => {
    printInfo();
});

/*
database.ref('location/city')
.once('value')
.then((snapshot) => {
    const val = snapshot.val();
    console.log('Valor da consulta:', val);
})
.catch((err) => {
    console.log('Error get data',err);
});
*/

/*
database.ref()
.once('value')
.then((snapshot) => {
    const val = snapshot.val();
    console.log('Valor da consulta:', val);
})
.catch((err) => {
    console.log('Error get data',err);
});
*/

/*
database.ref().set({
    name: 'Iohan Camargo',
    age: 25,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    isSingle: false,
    location: {
        city: 'Ponta Grossa',
        country: 'Brasil'
    }
}).then(() => {
    console.log('data is saved');
})
.catch((err) => {
    console.log('Fail: ',err);
});

// database.ref('age').set(26);
// database.ref('location/city').set('Ponta Grossa - PR');
/*
database.ref('attributes').set({
    height: 30,
    weight: 30
})
.then(() => {
    console.log('data atributtes saved');
})
.catch((err) => {
    console.log('Fail save atribbutes: ',err);
});
*/
/*
database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seatle'
});

/*
database.ref('isSingle')
.set(null)
.then(() =>{
    console.log('Removeu');
})
.catch((err) =>{
    console.log('Erro ao remover',err);
})
*/ 

/*
database.ref('isSingle')
.remove()
.then(() =>{
    console.log('Removeu');
})
.catch((err) =>{
    console.log('Erro ao remover',err);
})

database.ref()
.remove()
.then(() =>{
    console.log('Removeu');
})
.catch((err) =>{
    console.log('Erro ao remover',err);
})
*/