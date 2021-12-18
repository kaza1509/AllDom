//random color
let randomColor = () => {
    let hexa ='';
  
    while(true) {
      let ran = Math.floor(Math.random() * 123)
      if((ran >=48 && ran <=57) 
      || (ran >= 65 && ran <= 70) 
      || (ran >= 97 && ran <= 102)) 
      {
        hexa += String.fromCharCode(ran) 
      }
      if(hexa.length == 6) break;
    }
  
    return `#${hexa.toUpperCase()}`
}

/**
 * Hiệu ứng đổi màu color
 */
let changerColorYear = () => {
    let year = document.querySelector('header h1 span')
    year.style.color = `${randomColor()}`

    setTimeout(() => {
        changerColorYear()
    },1000)
}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}


let changeColorTime = () => {
    Object.assign(document.body.style, {
        fontFamily: 'Arial, Helvetica, sans-serif',
        maxWidth: '960px',
        margin: '0 auto'
    })

    let time = document.getElementById('time')
    
    time.style.backgroundColor = `${randomColor()}`

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    let now = new Date()
    let y = now.getFullYear()
    let m = monthNames[now.getMonth()]
    console.log(m);
    let d = checkTime(now.getDate())
    let h = checkTime(now.getHours())
    let mm = checkTime(now.getMinutes())
    let s = checkTime(now.getSeconds())
    
    time.innerHTML = `${m} ${d}, ${y} ${h}:${mm}:${s}`
    
    setTimeout(function() {
        changeColorTime()
    }, 1000);
}

// header
let headers = () => {
    let header = document.createElement('header')
    header.style.textAlign = 'center'
    //tạo ra thẻ h1
    let h1 = document.createElement('h1')
    h1.textContent = asabenehChallenges2020.description

    Object.assign(h1.style, {
        fontSize: '25px',
        fontWeight: 'normal',
        marginTop: '30px'
    })

    //tạo ra thẻ span chứa năm
    let year = document.createElement('span')
    year.textContent = asabenehChallenges2020.challengeYear

    Object.assign(year.style, {
        marginLeft: '5px',
        display: 'inline-block',
        fontSize: '70px',
        fontWeight: 'normal'
    })

    //thêm year vào h1
    h1.appendChild(year)

    //thêm h1 vào header
    header.appendChild(h1)

    //tạo thẻ h2
    let title = document.createElement('h2')
    title.textContent = asabenehChallenges2020.challengeSubtitle
    Object.assign(title.style, {
        fontWeight: 'normal',
        fontSize: '18px',
        textDecoration: 'underline'
    })

    //thêm thẻ h2-title vào header
    header.appendChild(title)

    //Tạo ra thẻ div chứ time
    let time = document.createElement('div')
    time.id = 'time'
    Object.assign(time.style, {
        display: 'inline-block',
        padding: '5px 12px',
        fontSize: '14px',
        margin: '15px 0'
    })

    //thêm time vào header
    header.appendChild(time)
    //thêm thẻ header vào body
    document.body.appendChild(header)

}

let content = () => {
    //tạo ra content
    let content = document.createElement('div')
    content.id = 'content'
    content.style.fontSize = '16px'
    //thêm content vào body
    document.body.appendChild(content)

    //tạo ra thẻ ul
    let ul = document.createElement('ul')
    ul.style.margin = '0 auto'
    ul.style.maxWidth = '700px'
    //thêm ul vào content
    content.appendChild(ul)
    for (let i = 0; i < 8; i++) {
        //tạo ra thẻ li
        let element = document.createElement('li')

        //tạo ra 3 thẻ div
        for (let j = 0; j < 3; j++) {
            let e = document.createElement('div')
            if(j == 0) {
                e.textContent = asabenehChallenges2020.challenges[i].name
                e.style.width = '215px' // --------------------------------
            }

            if(j == 1) {
                let detail = document.createElement('details')
                let summary = document.createElement('summary')
                summary.textContent = asabenehChallenges2020.challenges[i].about
                summary.style.marginBottom = '5px'

                //-------------
                //nôi dung trong đây nữa
                //-------------
                let lengthTopic = asabenehChallenges2020.challenges[i].topics.length
                let ulTopic = document.createElement('ul')
                for (let k = 0; k < lengthTopic; k++) {
                    let eTopic = document.createElement('li')
                    eTopic.style.listStyle = 'none'
                    eTopic.textContent = asabenehChallenges2020.challenges[i].topics[k]

                    eTopic.style.marginBottom = '5px'

                    ulTopic.append(eTopic)
                }
                e.style.width = '180px' // --------------------------------

                detail.append(ulTopic)
                detail.appendChild(summary)
                e.appendChild(detail)
            }

            if(j == 2) {
                e.textContent = asabenehChallenges2020.challenges[i].status
                e.style.width = '70px' // --------------------------------
            }

            element.appendChild(e)
        }

        Object.assign(element.style, {
            listStyle: 'none',
            backgroundColor: 'red',
            padding: '17px',
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '2px solid #fff'
        })

        if(i == 0) {
            element.style.backgroundColor = '#21BF73'
        }
        else if(i == 1) {
            element.style.backgroundColor = '#FDDB3A'
        }
        else {
            element.style.backgroundColor = '#FD5E53'
        }

        //thêm thẻ li vào content
        ul.appendChild(element)
    }
}

let footer = () => {
    let footer = document.createElement('footer')
    let name = document.createElement('h2')
    name.textContent = asabenehChallenges2020.author.firstName+' '+asabenehChallenges2020.author.lastName

    Object.assign(name.style, {
        textAlign: 'center',
        marginTop: '15px',
    })
    footer.appendChild(name)

    let ulInfo = document.createElement('ul')
    ulInfo.id = 'info'
    Object.assign(ulInfo.style, {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '7px'
    })

    footer.appendChild(ulInfo)

    let lengthInfo = asabenehChallenges2020.author.socialLinks.length
    for (let i = 0; i < lengthInfo; i++) {
        //tạo ra thẻ li
        let icon = document.createElement('li')
        Object.assign(icon.style, {
            listStyle: 'none',
            marginLeft: '15px'
        })

        //tạo ra thẻ a
        let link = document.createElement('a')
        //gán link cho thẻ a
        link.href = `${asabenehChallenges2020.author.socialLinks[i].url}`

        //đặt icon social
        link.innerHTML = `${asabenehChallenges2020.author.socialLinks[i].fontawesomeIcon}`

        //style cho thẻ i
        // let lista = document.querySelectorAll('#info li a')
        // console.log(lista);
        // for (let j = 0; j < lista; j++) {
        //     console.log(a);
        //     lista[j].style.fontSize = '40px'
        //     lista[j].style.display = 'block'
        // }

        //thêm vào thẻ
        icon.appendChild(link)
        ulInfo.appendChild(icon)
    }
    
    let p = document.createElement('p')
    p.textContent = asabenehChallenges2020.author.bio

    Object.assign(p.style, {
        maxWidth: '700px',
        margin: '0px auto',
        textAlign: 'center',
        margin: '30px auto'
    })
    footer.appendChild(p)

    //tạo ra bảng
    let table = document.createElement('div')
    Object.assign(table.style, {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '800px',
        margin: '0px auto',
        flexWrap: 'wrap'
    })

    //tạo ra phần title
    let title = document.createElement('div')
    let ulTitle = document.createElement('ul')

    let headerTitle = document.createElement('h3')
    headerTitle.textContent = 'Titles'
    title.appendChild(headerTitle)

    let lengthTitle = asabenehChallenges2020.author.titles.length

    for (let i = 0; i < lengthTitle; i++) {
        let liTitle = document.createElement('li')
        liTitle.style.listStyle = 'none'

        let span01 = document.createElement('span')
        let span02 = document.createElement('span')

        span01.textContent = asabenehChallenges2020.author.titles[i][0]
        span02.textContent = asabenehChallenges2020.author.titles[i][1]

        liTitle.appendChild(span01)
        liTitle.appendChild(span02)

        ulTitle.appendChild(liTitle)
    }

    title.appendChild(ulTitle)
    table.appendChild(title)

    //tạo ra phần skills
    let skills = document.createElement('div')
    let ulSkills = document.createElement('ul')

    let headerSkills = document.createElement('h3')
    headerSkills.textContent = 'Skills'
    skills.appendChild(headerSkills)

    let lengthSkills = asabenehChallenges2020.author.skills.length
    for (let i = 0; i < lengthSkills; i++) {
        let liSkills = document.createElement('li')
        liSkills.style.listStyle = 'none'

        let span01 = document.createElement('span')
        let span02 = document.createElement('span')

        span01.textContent = asabenehChallenges2020.author.skills[i][0]
        span02.textContent = asabenehChallenges2020.author.skills[i][1]

        liSkills.appendChild(span01)
        liSkills.appendChild(span02)
        
        ulSkills.appendChild(liSkills)
    }
    skills.appendChild(ulSkills)
    table.appendChild(skills)


    //tạo ra phần qualification
    let qualification = document.createElement('div')
    let ulQualification = document.createElement('ul')

    let headerQualification = document.createElement('h3')
    headerQualification.textContent = 'Qualifications'
    qualification.appendChild(headerQualification)


    let lengthQualification = asabenehChallenges2020.author.qualifications.length
    for (let i = 0; i < lengthQualification; i++) {
        let liQualification = document.createElement('li')
        liQualification.style.listStyle = 'none'

        let span01 = document.createElement('span')
        let span02 = document.createElement('span')

        let lengthQualification = asabenehChallenges2020.author.qualifications.length

        span01.textContent = asabenehChallenges2020.author.qualifications[i][0]
        span02.textContent = asabenehChallenges2020.author.qualifications[i][1]

        liQualification.appendChild(span01)
        liQualification.appendChild(span02)
        
        ulQualification.appendChild(liQualification)
    }
    qualification.appendChild(ulQualification)

    table.appendChild(qualification)    

    //-------------------------------------------------
    footer.appendChild(table)

    //-------------------------------------------------
    //key word
    let keywords = document.createElement('div')
    Object.assign(keywords.style, {
        maxWidth: '700px',
        margin: '20px auto'
    })

    let key = document.createElement('h3')
    key.textContent = 'Keywords'
    keywords.appendChild(key)

    let tag = document.createElement('div')

    let ulTag = document.createElement('ul')
    ulTag.style.marginTop = '6px'
    tag.append(ulTag)

    let lengthTag = asabenehChallenges2020.keywords.length

    let arrColor = ['#693860','#018A3B', '#E2EC4E', '#CB577C', '#E74D58', '#23DE8B', '#DEFD8D', '#E3E114', '#D91892', '#E0A9CB', '#F0D349', '#2BAF07', '#CABE66', '#1535BD', '#06920F', '#1DC99E', '#6C9284', '#F05167', '#757C7F', '#59986B', '#C94B65', '#265712', '#B8C9DB', '#A79AE2', '#844445', '#10C619', '#A2552D', '#FFCC27', '#9B8A68', '#FCE84C', '#88CCE6', '#66DE30', '#FD5E53', '#21BF73', '#FDDB3A']

    for (let i = 0; i < lengthTag; i++) {
        let liTag = document.createElement('li')
        liTag.textContent = `#${asabenehChallenges2020.keywords[i]}`

        Object.assign(liTag.style, {
            listStyle: 'none',
            display: 'inline-block',
            borderRadius: '20px',
            marginRight: '18px',
            marginBottom: '4px',
            padding: '4px 6px',
            fontStyle: 'italic',
            fontSize: '15px',
            backgroundColor: arrColor[i],
            cursor: 'pointer'
        })
        //set mau theo i

        ulTag.appendChild(liTag)
    }

    keywords.appendChild(tag)

    footer.appendChild(keywords)

    document.body.appendChild(footer)
}

let reaction = () => {
    // let rec = document.querySelectorAll('footer li')
    // for (let i = 0; i < rec.length; i++) {
    //     rec[i].addEventListener('click', () => {
    //         let w = window.open("", "", "width=1000", "height=650");
    //         w.document.write('Có làm thì mới có ăn')
    //     })
    // }
    let a = document.querySelectorAll('a')
    for (let i = 0; i < a.length; i++) {
        a[i].setAttribute('target', '_blank')       
    }
}

let main = function(){
    // --------------- header ---------------
    headers()
    //hiếu ứng đổi màu color year
    changerColorYear()
    //hiêu ứng thay đổi color time
    changeColorTime()

    // ---------------- content -------------
    content()
    // ---------------- Footer --------------
    footer()
    reaction()
}()
