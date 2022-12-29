 //Συνάρτηση που χρησιμοποιείται ώστε να αρχικοποιούντααι κάποιες τιμές, σε κάθε φόρτωση της σελίδας (on body loading)
 function onload(){   //αλλά και με κάθε νέα επιλογή νέας πράξης
    monitor3.innerHTML = "";  //καθαρισμός προηγούμενων τιμών στην οθόνη αποτελεσμάτων 
    input2.style.visibility = 'hidden';  //αρχικά εξαφανίζουμε τα πλαίσια εισόδου τιμών
    input1.style.visibility = 'hidden';
    input1.value = "";  //και αρχικοποιούμε τις τιμές τους στο "κενό"
    input2.value = "";
    label1.style.visibility = 'hidden'; //κάνουμε αόρατα και τα πλαίσια με την περιγραφή των τιμών εισόδου.
    label2.style.visibility = 'hidden';
 }

//συνάρτηση για την πραγματοποίηση και εμφάνιση της κατάλληλης πράξης, ανάλογα με την επιλογή του χρήστη
  function onButtonClick(){
    if (input1.value == ""){  //σε περίπτωση που πατηθεί το κουμπί του υπολογισμού, χωρίς να έχει δοθεί τιμή στην παράμετρο
      monitor3.innerHTML="Επιλέξτε τιμη για την πρώτη παράμετρο"; //ζητήται εκ νέου
    }
    else{
    if (choise.value=="count1"){
     if (input2.value ==""){monitor3.innerHTML="Επιλέξτε τιμη για την δελυτερη παράμετρο";}  // επίσης ζητείται και για την δεύτερη παράμετρο
      else{                                                                             //στις δύο πράξεις που απαιτείται
        monitor3.innerHTML="Το αποτέλεσμα είναι: "+input1.value*input2.value/2+ " cm";
       }
      }
      else if (choise.value=="count2"){
        if (input2.value ==""){monitor3.innerHTML="Επιλέξτε τιμη για την δελυτερη παράμετρο";}
      else{
        monitor3.innerHTML="Το αποτέλεσμα είναι: "+input1.value*input2.value+ " cm";
      }
      }
      else if (choise.value=="count3"){
        let pi=Math.PI;
        monitor3.innerHTML="Το αποτέλεσμα είναι: "+pi*input1.value*input1.value+ " cm";
      } 
    }
      
  }
// συνάρτηση που επιτρέπει την πραγματοποίηση αλλαγών, ανάλογα με την επιλογή από την πλευρά του αρχικού μενού με τις εποιλογές πράξης.
  function onResultChange() {
      onload(); //ζητάμε από τη συνάρτηση να μας καθαρίσει τις τιμές στα πεδία εισόδου και την οθόνη αποτελεσμάτων, απο προηγούμενους υπολογισμούς
      document.getElementById("monitorTextID1").innerHTML = choise.value; // λαμβάνουμε την επιλογή του χρήστη από το μενού
      buttonCh.style.visibility = "visible"; //εμφανίζουμε το κουμπί επιλογής
    label1.value="Βάση: "; //αρχικοποιπύμε την περιγραφή - λεζάντα, που ενημερώνει το χρήστη για το αναμενόμενο περιεχόμενο
    label2.value="Υψος";  //στα πεδία εισόδου τιμών
    label1.style.visibility = "visible"; //εμφανίζουμε και τις λεζάντες για τα πεδία εισόδου (τι είδος παραμέτρου περιμένουμε να δοθεί)
    label2.style.visibility = "visible";
      if (choise.value=="count1"){  //ανάλογα με την επιλογή από το μενού, θα εμφανιστεί και το κατάλληλο μήνυμα οδηγιών
        monitor2.innerHTML = "Για τον υπολογισμό του Τριγώνου, θα χρειαστούμε τις διαστάσεις της βάσης και του ύψους, σε εκατοστά:";
        input2.style.visibility = 'visible';  //ενώ παράλληλα θα εμφανιστούν και τα απαραίτητα πεδία εισόδου τιμών
        input1.style.visibility = 'visible';
      }
      else if (choise.value=="count2"){
        monitor2.innerHTML = "Για τον υπολογισμό του Τετράπλευρου, θα χρειαστούμε τις διαστάσεις των δύο πλευρών του, σε εκατοστά:";
        input2.style.visibility = 'visible';
        input1.style.visibility = 'visible';
      }
      else if (choise.value=="count3"){
        monitor2.innerHTML = "Για τον υπολογισμό του Κύκλου, θα χρειαστούμε την διάσταση της ακτίνας του, σε εκατοστά:";
        input2.style.visibility = 'hidden';
        input1.style.visibility = 'visible';
       label1.value = "Ακτίνα";     //εμφανίζονται μόνο τα απαιτούμενα πεδία και ενημερώνονται και οι περιγραφές
       label2.style.visibility = 'hidden';
      }
      } 