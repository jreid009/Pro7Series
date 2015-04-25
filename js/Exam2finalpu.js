function display1() {
    dispWin_1 = window.open('', 'NewWin_1',
    'toolbar=no,status=yes,width=300,height=200')
    
    message_1 = "<ul><li>CategoryID: " +
    document.form1.categoryid.value;
    dispWin_1.document.write(message_1);
}
function display2() {
    dispWin_2 = window.open('', 'NewWin_2',
    'toolbar=no,status=no,width=300,height=200')
    
    message_2 = "<ul><li>John Reid " +
    document.form2.name.value;
    message_2 = "<ul><li>The University of Alabama at Birmingham " +
    document.form2.school.value;
    message_2 = "<ul><li>Bachelor of Science " +
    document.form2.degree.value;
    message_2 = "<ul><li>Information Systems " +
    document.form2.major.value;
    message_2 = "<ul><li>jreid009 " +
    document.form2.blazerid.value;
    dispWin_2.document.write(message_2);
}
