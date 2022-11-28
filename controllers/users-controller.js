let DUMMY_USERS =[
    {
        id: 'u1',
        name: ' Joe Blow',
        email: 'j@gmail.com',
        password: 'dummyuser'
    },
    {
        id: 'u2',
        name: ' Moe Doe',
        email: 'm@gmail.com',
        password: 'dummyuser2'
    }
]

const getUsers = (req, res)=>{
    res.status(200).json({users: DUMMY_USERS})
}

const signup = (req, res)=>{
    //Minor destructuring to practice DRY
    const { name, email, password } = req.body

    const userExist = DUMMY_USERS.find(u => u.email === email)
    if (userExist){
         return res.json('user present')
    }

    const createdUser = {
        //Math.random generates a number, so must be converted to string fo query references
        id: String(Math.random()),
        name : name,
        email : email,
        password: password
    }
    DUMMY_USERS.push(createdUser)
    res.status(200).json({createdUser})
}

const login = (req, res)=>{
    //Minor destructuring to practice DRY
    const { email, password } = req.body

    const identifiedUser = DUMMY_USERS.find(u => u.email === email)
    if (!identifiedUser || identifiedUser.password !== password){
        res.status(400).json({message: 'sorry cant not verify'})
    }
    else{res.status(200).json(`welcome and logged in for ${identifiedUser.email}`)}
}

exports.getUsers = getUsers
exports.signup = signup
exports.login = login
