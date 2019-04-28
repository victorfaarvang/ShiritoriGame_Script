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
        if (aCount <= aWords.length)
        {
            inputTrigger(aWords[aCount]);
            aCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'b' && myTurn == false)
    {
        if (bCount <= bWords.length)
        {
            inputTrigger(bWords[bCount]);
            bCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'c' && myTurn == false)
    {
        if (cCount <= cWords.length)
        {
            inputTrigger(cWords[cCount]);
            cCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'd' && myTurn == false)
    {
        if (dCount <= dWords.length)
        {
            inputTrigger(dWords[dCount]);
            dCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'e' && myTurn == false)
    {
        if (eCount <= eWords.length)
        {
            inputTrigger(eWords[eCount]);
            eCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'f' && myTurn == false && myTurn == false)
    {
        if (fCount <= fWords.length)
        {
            inputTrigger(fWords[fCount]);
            fCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'g' && myTurn == false)
    {
        if (gCount <= gWords.length)
        {
            inputTrigger(gWords[gCount]);
            gCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'h' && myTurn == false)
    {
        if (hCount <= hWords.length)
        {
            inputTrigger(hWords[hCount]);
            hCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'i' && myTurn == false)
    {
        if (iCount <= iWords.length)
        {
            inputTrigger(iWords[iCount]);
            iCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'j' && myTurn == false)
    {
        if (jCount <= jWords.length)
        {
            inputTrigger(jWords[jCount]);
            jCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'k' && myTurn == false)
    {
        if (kCount <= kWords.length)
        {
            inputTrigger(kWords[kCount]);
            kCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'l' && myTurn == false)
    {
        if (lCount <= lWords.length)
        {
            inputTrigger(lWords[lCount]);
            lCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'm' && myTurn == false)
    {
        if (mCount <= mWords.length)
        {
            inputTrigger(mWords[mCount]);
            mCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'n' && myTurn == false)
    {
        if (nCount <= nWords.length)
        {
            inputTrigger(nWords[nCount]);
            nCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'o' && myTurn == false)
    {
        if (oCount <= oWords.length)
        {
            inputTrigger(oWords[oCount]);
            oCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'p' && myTurn == false)
    {
        if (pCount <= pWords.length)
        {
            inputTrigger(pWords[pCount]);
            pCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'q' && myTurn == false)
    {
        if (qCount <= qWords.length)
        {
            inputTrigger(qWords[qCount]);
            qCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'r' && myTurn == false)
    {
        if (rCount <= rWords.length)
        {
            inputTrigger(rWords[rCount]);
            rCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 's' && myTurn == false)
    
        if (sCount <= sWords.length)
        {
            inputTrigger(sWords[sCount]);
            sCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 't' && myTurn == false)
    {
        if (tCount <= tWords.length)
        {
            inputTrigger(tWords[tCount]);
            tCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'u' && myTurn == false)
    {
        if (uCount <= uWords.length)
        {
            inputTrigger(uWords[uCount]);
            uCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'v' && myTurn == false)
    {
        if (vCount <= vWords.length)
        {
            inputTrigger(vWords[vCount]);
            vCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'w' && myTurn == false)
    {
        if (wCount <= wWords.length)
        {
            inputTrigger(wWords[wCount]);
            wCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'x' && myTurn == false)
    {
        if (xCount <= xWords.length)
        {
            inputTrigger(xWords[xCount]);
            xCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'y' && myTurn == false)
    {
        if (yCount <= yWords.length)
        {
            inputTrigger(yWords[yCount]);
            yCount++;
        }
    }
    else if (document.getElementById("left").children[3].firstElementChild.firstElementChild.placeholder == 'z' && myTurn == false)
    {
        if (zCount <= zWords.length)
        {
            inputTrigger(zWords[zCount]);
            zCount++;
        }
    }
    else
        myTurn = false;
        
}, 400);
function inputTrigger(word)
{
    document.getElementById("left").children[3].firstElementChild.firstElementChild.value = word;
	alert("Click enter");
    myTurn = true;
}
