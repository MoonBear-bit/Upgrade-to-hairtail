let Fish=document.getElementById('Fish')
let Water=document.getElementById('Water')
let UpgradeButtonUI=document.getElementById('Upgrade')
let SellButtonUI=document.getElementById('Sell')
let MoneyUI=document.getElementById('Money')
let NeedMoneyUI=document.getElementById('NeedMoney')
let SellMoneyUI=document.getElementById('SellMoney')
let TryUpgradeUI=document.getElementById('TryUpgrade')
let NameUI=document.getElementById('Name')
let StoryModeStartButtonUI=document.getElementById('StoryMode')
let BuyTreatmentKitButtonUI=document.getElementById('BuyTreatmentKit')
let TreatmentKitUI=document.getElementById('TreatmentKit')
let RandomMoneyButtonUI=document.getElementById('RandomMoney')
Fish.style.display='none'
Water.style.display='none'
UpgradeButtonUI.style.display='none'
SellButtonUI.style.display='none'
MoneyUI.style.display='none'
NeedMoneyUI.style.display='none'
SellMoneyUI.style.display='none'
TryUpgradeUI.style.display='none'
NameUI.style.display='none'
BuyTreatmentKitButtonUI.style.display='none'
TreatmentKitUI.style.display='none'
RandomMoneyButtonUI.style.display='none'
let FishLevel=0
let TryUpgrade=50
let NeedMoney=100
let SellMoney=0
let Money=35000
let TreatmentKit=0
let Life=0
let TryUpgradeOfLevel=[50,98,96,94,92,90,85,82,78,75,72,69,66,63,60,57,54,51,48,45,42,39,36,33,30,27,10,0]
let SellMoneyOfLevel=[0,45,50,500,900,2500,3500,17500,29500,55000,95000,169000,260000,470000,807000,1500000,2900000,4000000,6300000,11000000,17500000,30500000,50500000,86500000,150000000,250000000,435000000,
    715500000
]
let WhyFailedArray=['교통사고로 인해','수산시장에 잡혀가서','스트레스로','미래를 깨닫고','반1란을 일으켜서','우울증으로','그냥','지1렁이의 심기를 건드려']
let NameOfLevel=['알','새끼 갈치','어린 갈치','작은 갈치','갈치','큰 갈치','돌갈치','철갈치','은갈치','금갈치','티타늄갈치','다이아몬드갈치','텅스텐갈치','우라늄갈치','유전자 조작 갈치',
    '재앙 갈치','노인 갈치','금품갈치','반도체 갈치','손질 갈치','냉동 갈치','갈치 구이','되살아난 갈치','저격소총 갈치','위대한 저격수 갈치','우주미아 갈치','행성:갈치1972-N','지구:갈치'
]
let i=0
let a=100
let b=0
for (i=0;i<NameOfLevel.length;i++){
    a*=1.7
    a=Math.round(a)
    b+=a
    console.log(a, b, SellMoneyOfLevel[i],TryUpgradeOfLevel[i],NameOfLevel[i],i)
}
//Event
RandomMoneyButtonUI.addEventListener('click',()=>{
    let RandomMoney=Math.random()*2
    Money*=RandomMoney
    Money=Math.round(Money)
})
StoryModeStartButtonUI.addEventListener('click',()=>{
    StoryModeStart()
})
UpgradeButtonUI.addEventListener('click',()=>{
    var tu=TryUpgrade
    var num=Math.random()*100
    if(NeedMoney<=Money){
        if (tu>=num){
            SuccsessUpgrade()
        }else{
            let RandomFailed=Math.round(Math.random()*WhyFailedArray.length)
            let WhyFailed=WhyFailedArray[RandomFailed]
            if (!WhyFailed) WhyFailed='그냥'
            alert(`갈치가 ${WhyFailed} 사1망했습니다`)
            FailedUpgrade()
        }
    }else{
        alert('돈이 없습니다')
    }
        
})
SellButtonUI.addEventListener('click',()=>{
    Money+=SellMoney
    FishLevel=0
    NeedMoney=100
    TryUpgrade=TryUpgradeOfLevel[0]
    SellMoney=0
})
BuyTreatmentKitButtonUI.addEventListener('click',()=>{
    if (Money>=7000){
        Money-=7000
        TreatmentKit+=1
    }else{
        alert('돈이 없습니다')
    }
})
//Funcion
function StoryModeStart(){
    StoryModeStartButtonUI.style.display='none'
    Fish.style.display='block'
    Water.style.display='block'
    UpgradeButtonUI.style.display='block'
    SellButtonUI.style.display='block'
    MoneyUI.style.display='block'
    NeedMoneyUI.style.display='block'
    SellMoneyUI.style.display='block'
    TryUpgradeUI.style.display='block'
    NameUI.style.display='block'
    BuyTreatmentKitButtonUI.style.display='block'
    TreatmentKitUI.style.display='block'
    RandomMoneyButtonUI.style.display='block'
}
function SuccsessUpgrade(){
    FishLevel+=1
    Money-=NeedMoney
    NeedMoney*=1.7
    NeedMoney=Math.round(NeedMoney)
    TryUpgrade=TryUpgradeOfLevel[FishLevel]
    SellMoney=SellMoneyOfLevel[FishLevel]
}
function FailedUpgrade(){
    Money-=NeedMoney
    if (TreatmentKit>=FishLevel && FishLevel!==0){
        alert('그러나 치료했습니다')
        TreatmentKit-=FishLevel
    }else if(TreatmentKit>0 && FishLevel!==0){
        alert('치료 키트는 갈치의 단계 만큼 소지해야 합니다.')
        FishLevel=0
        NeedMoney=100
        TryUpgrade=TryUpgradeOfLevel[0]
        SellMoney=0
    }else{
        FishLevel=0
        NeedMoney=100
        TryUpgrade=TryUpgradeOfLevel[0]
        SellMoney=0
    }
}
function FishUpgrade(){
    Fish.style.backgroundImage=`url(image/lv${FishLevel}.png)`
}
function UISet(){
    MoneyUI.textContent=`돈:${Money}$`
    NeedMoneyUI.textContent=`가격:${NeedMoney}$`
    SellMoneyUI.textContent=`판매가:${SellMoney}$`
    TryUpgradeUI.textContent=`성공확률:${TryUpgrade}%`
    NameUI.textContent=`${FishLevel}-${NameOfLevel[FishLevel]}`
    TreatmentKitUI.textContent=`치료키트:${TreatmentKit}`
}
function keep(){
    UISet()
    FishUpgrade()
    requestAnimationFrame(keep)
}
keep()