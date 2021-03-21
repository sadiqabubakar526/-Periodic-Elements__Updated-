   //dict_keys()
        
            
            var periodic_data = {'hydrogen': 1, 'helium': 2, 'lithium': 3, 'beryllium': 4, 'boron': 5, 'carbon': 6, 'nitrogen': 7, 'oxygen': 8, 'fluorine': 9, 'neon': 10, 'sodium': 11, 'magnesium': 12, 'aluminium': 13, 'silicon': 14, 'phosphorus': 15, 'sulphur': 16, 'chlorine': 17, 'argon': 18, 'potassium': 19, 'calcium': 20, 'scandium': 21, 'titanium': 22, 'vanadium': 23, 'chromium': 24, 'manganese': 25, 'iron': 26, 'cobalt': 27, 'nickel': 28, 'copper': 29, 'zinc': 30, 'gallium': 31, 'germanium': 32, 'arsenic': 33, 'selenium': 34, 'bromine': 35, 'krypton': 36, 'rubidium': 37, 'strontium': 38, 'yttrium': 39, 'zirconium': 40, 'niobium': 41, 'molybdenum': 42, 'technetium': 43, 'ruthenium': 44, 'rhodium': 45, 'palladium': 46, 'silver': 47, 'cadmium': 48, 'indium': 49, 'tin': 50, 'antimony': 51, 'tellurium': 52, 'iodine': 53, 'xenon': 54, 'cesium': 55, 'barium': 56, 'lanthanum': 57, 'cerium': 58, 'praseodymium': 59, 'neodymium': 60, 'promethium': 61, 'samarium': 62, 'europium': 63, 'gadolinium': 64, 'terbium': 65, 'dysprosium': 66, 'holmium': 67, 'erbium': 68, 'thulium': 69, 'ytterbium': 70, 'lutetium': 71, 'hafnium': 72, 'tantalum': 73, 'tungsten': 74, 'rhenium': 75, 'osmium': 76, 'iridium': 77, 'platinum': 78, 'gold': 79, 'mercury': 80, 'thallium': 81, 'lead': 82, 'bismuth': 83, 'polonium': 84, 'astatine': 85, 'radon': 86, 'francium': 87, 'radium': 88, 'actinium': 89, 'thorium': 90, 'protactinium': 91, 'uranium': 92, 'neptunium': 93, 'plutonium': 94, 'americium': 95, 'curium': 96, 'berkelium': 97, 'californium': 98, 'einsteinium': 99, 'fermium': 100, 'mendelevium': 101, 'nobelium': 102, 'lawrencium': 103, 'rutherfordium': 104, 'dubnium': 105, 'seaborgium': 106, 'bohrium': 107, 'hassium': 108, 'meitnerium': 109, 'darmstadtium': 110, 'roentgenium': 111, 'copernicium': 112, 'nihonium': 113, 'flerovium': 114, 'moscovium': 115, 'livermorium': 116, 'tennessine': 117, 'oganesson': 118, 'ununennium': 119}

function show_data(){
    
    async function tempr(){

        var response= await fetch("https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json")
        if (response.ok){
            //console.log("got it .......")
            $(".loader_container").css("display","none");
            var data = await response.json();
            $("#btn").click(function(){
                try{
                    var element = document.getElementsByClassName("property_value")
                    var valu = $('input[type="text"]').val();
                    var atomic_no = periodic_data[valu.trim().toLowerCase()];
                    var atomic_data = data.elements[atomic_no - 1];
                    $("#atomic_name").html(atomic_data.name);
                    var lst = ['number' , 'appearance', 'atomic_mass', 'boil', 'category', 'color', 'density', 'discovered_by', 'melt', 'molar_heat', 'named_by', 'period', 'phase', 'symbol', 'xpos', 'ypos', 'shells', 'electron_configuration', 'electron_configuration_semantic', 'electron_affinity', 'electronegativity_pauling', 'ionization_energies', 'cpk-hex'];
                    for (var i in lst){
                        element[i].innerHTML = atomic_data[lst[i]];
                    }
                    element[22].style.color = "#"+atomic_data["cpk-hex"];
                }
                catch(err){
                    Swal.fire({
                        position: 'top-end',
                        //icon: 'success',
                        title: 'SOME ERROR OCCURES',
                        text:"Please Make Sure That You Are Entering Correct Spelling",
                        showConfirmButton: false,
                        timer: 2000,
                        customClass:'swet',
                        footer:err
                    });
                }
            });
        }
        else{
            var data= await response.json();
            console.log("error ........")
        }
    }
    tempr();

}


window.onload = function(){
    show_data();
}
       