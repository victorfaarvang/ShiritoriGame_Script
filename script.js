//Amount of times each word is used
var aCount = 0; var bCount = 0; var cCount = 0; var dCount = 0; var eCount = 0;
var fCount = 0; var gCount = 0; var hCount = 0; var iCount = 0; var jCount = 0;
var kCount = 0; var lCount = 0; var mCount = 0; var nCount = 0; var oCount = 0;
var pCount = 0; var qCount = 0; var rCount = 0; var sCount = 0; var tCount = 0;
var uCount = 0; var vCount = 0; var wCount = 0; var xCount = 0; var yCount = 0;
var zCount = 0;

//List of words to use by script
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
var timeBetweenChecks = 400; //ms time between check if own turn

var myInterval = setInterval(function() {
    
    //Give an id to the inputfield, so we easier can use JQuery on it.
    document.getElementById("left").children[3].firstElementChild.firstElementChild.id = "inputField";
    
    //Check what letter our word has to start with
    if (document.getElementById("inputField").placeholder == 'a' && myTurn == false)
    {
        //Check if we are out of words, if so we do nothing
        if (aCount <= aWords.length)
        {
            //Make the move and count the amount of times this letter has been used
            inputTrigger(aWords[aCount]);
            aCount++;
            console.log("a: " + aCount + " of " + aWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'b' && myTurn == false)
    {
        if (bCount <= bWords.length)
        {
            inputTrigger(bWords[bCount]);
            bCount++;
            console.log("b: " + bCount + " of " + bWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'c' && myTurn == false)
    {
        if (cCount <= cWords.length)
        {
            inputTrigger(cWords[cCount]);
            cCount++;
            console.log("c: " + cCount + " of " + cWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'd' && myTurn == false)
    {
        if (dCount <= dWords.length)
        {
            inputTrigger(dWords[dCount]);
            dCount++;
            console.log("a: " + aCount + " of " + dWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'e' && myTurn == false)
    {
        if (eCount <= eWords.length)
        {
            inputTrigger(eWords[eCount]);
            eCount++;
            console.log("e: " + eCount + " of " + eWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'f' && myTurn == false)
    {
        if (fCount <= fWords.length)
        {
            inputTrigger(fWords[fCount]);
            fCount++;
            console.log("f: " + fCount + " of " + fWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'g' && myTurn == false)
    {
        if (gCount <= gWords.length)
        {
            inputTrigger(gWords[gCount]);
            gCount++;
            console.log("g: " + gCount + " of " + gWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'h' && myTurn == false)
    {
        if (hCount <= hWords.length)
        {
            inputTrigger(hWords[hCount]);
            hCount++;
            console.log("h: " + hCount + " of " + hWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'i' && myTurn == false)
    {
        if (iCount <= iWords.length)
        {
            inputTrigger(iWords[iCount]);
            iCount++;
            console.log("i: " + iCount + " of " + iWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'j' && myTurn == false)
    {
        if (jCount <= jWords.length)
        {
            inputTrigger(jWords[jCount]);
            jCount++;
            console.log("j: " + jCount + " of " + jWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'k' && myTurn == false)
    {
        if (kCount <= kWords.length)
        {
            inputTrigger(kWords[kCount]);
            kCount++;
            console.log("k: " + kCount + " of " + kWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'l' && myTurn == false)
    {
        if (lCount <= lWords.length)
        {
            inputTrigger(lWords[lCount]);
            lCount++;
            console.log("l: " + lCount + " of " + lWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'm' && myTurn == false)
    {
        if (mCount <= mWords.length)
        {
            inputTrigger(mWords[mCount]);
            mCount++;
            console.log("m: " + mCount + " of " + mWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'n' && myTurn == false)
    {
        if (nCount <= nWords.length)
        {
            inputTrigger(nWords[nCount]);
            nCount++;
            console.log("n: " + nCount + " of " + nWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'o' && myTurn == false)
    {
        if (oCount <= oWords.length)
        {
            inputTrigger(oWords[oCount]);
            oCount++;
            console.log("o: " + oCount + " of " + oWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'p' && myTurn == false)
    {
        if (pCount <= pWords.length)
        {
            inputTrigger(pWords[pCount]);
            pCount++;
            console.log("p: " + pCount + " of " + pWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'q' && myTurn == false)
    {
        if (qCount <= qWords.length)
        {
            inputTrigger(qWords[qCount]);
            qCount++;
            console.log("q: " + qCount + " of " + qWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'r' && myTurn == false)
    {
        if (rCount <= rWords.length)
        {
            inputTrigger(rWords[rCount]);
            rCount++;
            console.log("r: " + rCount + " of " + rWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 's' && myTurn == false)
    {
        if (sCount <= sWords.length)
        {
            inputTrigger(sWords[sCount]);
            sCount++;
            console.log("s: " + sCount + " of " + sWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 't' && myTurn == false)
    {
        if (tCount <= tWords.length)
        {
            inputTrigger(tWords[tCount]);
            tCount++;
            console.log("t: " + tCount + " of " + dWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'u' && myTurn == false)
    {
        if (uCount <= uWords.length)
        {
            inputTrigger(uWords[uCount]);
            uCount++;
            console.log("u: " + uCount + " of " + uWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'v' && myTurn == false)
    {
        if (vCount <= vWords.length)
        {
            inputTrigger(vWords[vCount]);
            vCount++;
            console.log("v: " + vCount + " of " + vWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'w' && myTurn == false)
    {
        if (wCount <= wWords.length)
        {
            inputTrigger(wWords[wCount]);
            wCount++;
            console.log("w: " + wCount + " of " + wWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'x' && myTurn == false)
    {
        if (xCount <= xWords.length)
        {
            inputTrigger(xWords[xCount]);
            xCount++;
            console.log("x: " + xCount + " of " + xWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'y' && myTurn == false)
    {
        if (yCount <= yWords.length)
        {
            inputTrigger(yWords[yCount]);
            yCount++;
            console.log("y: " + yCount + " of " + yWords.length);
        }
    }
    else if (document.getElementById("inputField").placeholder == 'z' && myTurn == false)
    {
        if (zCount <= zWords.length)
        {
            inputTrigger(zWords[zCount]);
            zCount++;
            console.log("z: " + zCount + " of " + zWords.length);
        }
    }
    else
        myTurn = false;
    
    if (document.getElementById("left").firstElementChild.innerHTML == "0")
    {
aCount = 0; bCount = 0; cCount = 0; dCount = 0; eCount = 0;
fCount = 0; gCount = 0; hCount = 0; iCount = 0; jCount = 0;
kCount = 0; lCount = 0; mCount = 0; nCount = 0; oCount = 0;
pCount = 0; qCount = 0; rCount = 0; vCount = 0; tCount = 0;
uCount = 0; vCount = 0; wCount = 0; xCount = 0; yCount = 0;
zCount = 0;
    }
        
}, timeBetweenChecks);

function inputTrigger(word)
{
    //Change Value of inputField
	document.getElementById("left").children[3].firstElementChild.firstElementChild.value = word;
    
    //Press enter
    var e = jQuery.Event("keydown");
    e.which = 13;
    $("#inputField").trigger(e);
    myTurn = true;
}
