// Create data structure of questions with the correct answer highlighted 
const title = "Reality Check | Hören - Teil 01 "
const Questions = [
{
    id: 0,
    q: 'Was kostet die Jacke?', 
    a: [{ text: 'Hundertzwanzig EUR', isCorrect: true},
        { text: 'Zwölfhundert EUR', isCorrect: false},
        { text: 'Hundertzwei EUR', isCorrect: false}]
},
{
    id: 1,
    q: 'Wie viel Uhr ist es?', 
    a: [{ text: 'Viertel nach sechs', isCorrect: true},
        { text: 'Vierzig Minuten nach sechs', isCorrect: false},
        { text: 'halb sieben', isCorrect: false}]
},
{
    id: 2,
    q: 'Was ebstellt der Mann im Restaurant?', 
    a: [{ text: 'Lachs', isCorrect: false},
        { text: 'ein Steak', isCorrect: true},
        { text: 'ein Stück Kuchen', isCorrect: false}]
},
{
    id: 3,
    q: 'In welcher Klasse ist Frau Müllers Tochter?', 
    a: [{ text: 'in der dritten Klasse', isCorrect: false},
        { text: 'in der siebten Klasse', isCorrect: true},
        { text: 'in der dreizehnten Klasse', isCorrect: false}]
},
{
    id: 4,
    q: 'In welchem Stock wohnt Frau Güler?', 
    a: [{ text: 'im zweiten Stock', isCorrect: false},
        { text: 'im Dachgeschoss', isCorrect: true},
        { text: 'im Erdgeschoss', isCorrect: false}]
},
{
    id: 5,
    q: 'Wohin fährt Herr Müller mit seiner Familie?', 
    a: [{ text: 'in die Berge', isCorrect: false},
        { text: 'ans Meer', isCorrect: true},
        { text: 'auf eine Insel', isCorrect: false}]
}
];