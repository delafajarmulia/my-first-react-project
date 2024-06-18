const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

export const login = async () => {
    if(email == ''|| password == ''){
        alert('masukkan data dengan lengkap')
        return
    }
    
    const result = await axios.post(`${base_url}/auth/login`, {
        email: email, 
        password:password
    })
    .then((response) => console.log(response))
    .catch(err => console.log(err))
    console.log(result)
}