//This bot was made by Victor
//The bot is intended for "https://shiritorigame.com"
//This script is not made with any particular purpose, use this script at your own risk and responsibility.
//To use this script, paste the code into the browser console and spam enter when its your turn. Because variables are not reset between games, you'll have to refresh your browser between every game.

var aCount = 0; var bCount = 0; var cCount = 0; var dCount = 0; var eCount = 0;
var fCount = 0; var gCount = 0; var hCount = 0; var iCount = 0; var jCount = 0;
var kCount = 0; var lCount = 0; var mCount = 0; var nCount = 0; var oCount = 0;
var pCount = 0; var qCount = 0; var rCount = 0; var sCount = 0; var tCount = 0;
var uCount = 0; var vCount = 0; var wCount = 0; var xCount = 0; var yCount = 0;
var zCount = 0;
 
var aWords = ["antrhopomorphic","abstractionisms","absorbabilities"];
var bWords = ["backscatterings","bacteriological","bacteriologists"];
var cWords = ["cannibalization","capaciousnesses","capitalizations"];
var dWords = ["dichlorodifluoromethanes","daguerreotypies","decalcification","decarboxylating"];
var eWords = ["ethylenediaminetetraacetates","electroencephalographically","ethylenediaminetetraacetate","electrocardiographically","electroencephalographers","electroencephalographies"];
var fWords = ["facetiousnesses","faithlessnesses","familiarization"];
var gWords = ["garrulousnesses","gastroenteritis","gastronomically"];
var hWords = ["habitablenesses","halfheartedness","hallucinogenics"];
var iWords = ["immunoelectrophoretically","intercomprehensibilities","identicalnesses","identifications","ideographically"];
var jWords = ["judiciousnesses","jurisprudential","juxtapositional"];
var kWords = ["kaffeeklatsches","keratinizations","kindergarteners"];
var lWords = ["laboriousnesses","labyrinthodonts","lackadaisically"];
var mWords = ["machinabilities","macroaggregated","macroaggregates"];
var nWords = ["nationalization","naturalizations","nearsightedness"];
var oWords = ["overintellectualizations","objectification","objectivenesses","obliviousnesses"];
var pWords = ["phosphatidylethanolamines","painterlinesses","palatablenesses","palatalizations"];
var qWords = ["quadruplicating","quadruplication","quadruplicities"];
var rWords = ["radicalizations","radioactivities","radioautographs"];
var sWords = ["spectrophotometrically","stereomicroscopically","straightforwardnesses","sabermetricians","superficialness","sacramentalisms"];
var tWords = ["tetrahydrocannabinols","tenderheartednesses","territorializations","tachyarrhythmia","talkativenesses","tarsometatarsus"];
var uWords = ["ultimogenitures","ultracentrifuge","ultracommercial"];
var vWords = ["valetudinarians","valuelessnesses","vascularization"];
var wWords = ["wappenschawings","warmheartedness","warrantableness"];
var xWords = ["xerographically","xeroradiography","xenodiagnostic"];
var yWords = ["youthfulnesses","yellowhammers","yellowthroats","yeastinesses","yellowhammer","yellowthroat","yesternights","youngberries"];
var zWords = ["zoogeographical","zombifications","zoogeographers"];

var myTurn = false;

var myInterval = setInterval(function() {
    if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'a' && myTurn == false)
    {
        inputTrigger(aWords[aCount]);
        aCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'b' && myTurn == false)
    {
        inputTrigger(bWords[bCount]);
        bCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'c' && myTurn == false)
    {
        inputTrigger(cWords[cCount]);
        cCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'd' && myTurn == false)
    {
        inputTrigger(dWords[dCount]);
        dCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'e' && myTurn == false)
    {
        inputTrigger(eWords[eCount]);
        eCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'f' && myTurn == false && myTurn == false)
    {
        inputTrigger(fWords[fCount]);
        fCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'g' && myTurn == false)
    {
        inputTrigger(gWords[gCount]);
        gCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'h' && myTurn == false)
    {
        inputTrigger(hWords[hCount]);
        hCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'i' && myTurn == false)
    {
        inputTrigger(iWords[iCount]);
        iCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'j' && myTurn == false)
    {
        inputTrigger(jWords[jCount]);
        jCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'k' && myTurn == false)
    {
        inputTrigger(kWords[kCount]);
        kCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'l' && myTurn == false)
    {
        inputTrigger(lWords[lCount]);
        lCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'm' && myTurn == false)
    {
        inputTrigger(mWords[mCount]);
        mCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'n' && myTurn == false)
    {
        inputTrigger(nWords[nCount]);
        nCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'o' && myTurn == false)
    {
        inputTrigger(oWords[oCount]);
        oCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'p' && myTurn == false)
    {
        inputTrigger(pWords[pCount]);
        pCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'q' && myTurn == false)
    {
        inputTrigger(qWords[qCount]);
        qCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'r' && myTurn == false)
    {
        inputTrigger(rWords[rCount]);
        rCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 's' && myTurn == false)
    {
        inputTrigger(sWords[sCount]);
        sCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 't' && myTurn == false)
    {
        inputTrigger(tWords[tCount]);
        tCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'u' && myTurn == false)
    {
        inputTrigger(uWords[uCount]);
        uCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'v' && myTurn == false)
    {
        inputTrigger(vWords[vCount]);
        vCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'w' && myTurn == false)
    {
        inputTrigger(wWords[wCount]);
        wCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'x' && myTurn == false)
    {
        inputTrigger(xWords[xCount]);
        xCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'y' && myTurn == false)
    {
        inputTrigger(yWords[yCount]);
        yCount++;
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'z' && myTurn == false)
    {
        inputTrigger(zWords[zCount]);
        zCount++;
    }
    else
        myTurn = false;
        
}, 200);
function inputTrigger(word)
{
    document.getElementById("left").children[3].firstElementChild.firstElementChild.value = word;
	alert("click enter you fucking neanderthal");
    myTurn = true;
}
