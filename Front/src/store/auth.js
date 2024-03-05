import router from "@/router";

const checkStatuses = (status) => {
    switch(status){
        case 400:
            window.alert('Проблема на сервере')
            return false
        case 413:
            window.alert('Email уже используется')
            return false
        default: 
            return true
    }
}

export default {
    name: 'auth',
    namespaced: true,
    actions: {
        async register({ }, {email, password, name}) {
            const data = JSON.stringify({email, password, name})
            console.log(data);
            const response = await fetch(`${process.env.VUE_APP_SERVER}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: data 
            })

            if (!checkStatuses(response.status)) return 
            window.alert('Вы юыди успешно зарегистрированы! Теперь авторизуйтесь')
            router.push('/login')
            return
        }
    }
}