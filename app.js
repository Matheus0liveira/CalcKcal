const form = document.querySelector('form')

form.addEventListener('submit', handleSubmitForm)




function handleSubmitForm(event) {
  event.preventDefault()



  const age = getInputNumberValue('age')
  const weight = getInputNumberValue('weight')
  const height = getInputNumberValue('height')
  const gender = getSelectedValue('gender')
  const activity = getSelectedValue('activity')





  const tmb = Math.round(

    gender === 'female'
      ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))

      : (66 + (13.7 + weight) + (5 * height) - (6.8 * age))

  )

  const maintenace = Math.round(tmb * Number(activity))

  const loseWeight = maintenace - 450
  const gainWeight = maintenace + 450




  const layout = `
  
  <p>Resultado:</p>

        <ul>
          <li> Seu metabolismo basal é de: <span>${tmb}</span></li>
          <li> Para manter seu peso você precisa consumir em média: <span>${maintenace}</span></li>
          <li> Para perder seu peso você precisa consumir em média: <span>${loseWeight}</span></li>
          <li> Para ganhar peso você precisa consumir em média: <span>${gainWeight}</span></li>
        </ul>
  `

  const result = document.querySelector('.result')

  result.innerHTML = layout

}

function getSelectedValue(id) {

  const selected = document.getElementById(id)


  return selected.options[selected.selectedIndex].value
}


function getInputNumberValue(id) {

  return Number(document.getElementById(id).value)
}