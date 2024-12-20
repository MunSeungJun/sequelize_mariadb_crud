/**
 * 사용자 등록 폼
 */

const userForm = document.querySelector("#user__form")
userForm.addEventListener("submit", async(e) => {
    e.preventDefault()
    const name = e.target.user__name.value
    const age = e.target.age.value
    const married = e.target.married.checked

    const response = await fetch("/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            age,
            married
        })
    })
    const data = await response.json()
    console.log(data)
})