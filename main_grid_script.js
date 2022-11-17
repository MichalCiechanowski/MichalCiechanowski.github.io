const sleep = (s) => {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

//create grid folder

const create_grid_element = (element_id, element_content) => {
    const grid_element = document.createElement('div')
    grid_element.id = element_id
    grid_element.className = 'grid-element'
    grid_element.append(element_content)

    return grid_element
}

const create_grid_folder = (folder_id, list_of_elements) => {
    const grid_folder = document.createElement('section')
    grid_folder.id = folder_id
    grid_folder.className = 'grid'
    for (let i = 0; i < list_of_elements.length; i++) {
        grid_folder.append(list_of_elements[i])
    }
    grid_folder.append(create_grid_element('go_back', 'Go back'))

    return grid_folder
}

//

//adding | removing classes of elements 0 for adding 1 for removing


const elements_class_manipulation = (elements, class_name_1, option) => {
    if (option == 0) {
        for (const element of elements) {
            element.classList.add(class_name_1)
        }
    }
    if (option == 1) {
        for (const element of elements) {
            element.classList.remove(class_name_1)
        }
    }
}

//

const new_folder = [create_grid_element('1', 'one'), create_grid_element('2', 'two')] //def components in new grid

const main = document.getElementById('main')
const base_site_element = document.getElementById('base_site')
const initial_div = document.getElementById('grid_folder_main')
    // const grid_elements = document.querySelectorAll('.grid-element')

const switch_grid = (current_grid_id, future_grid_id) => {
    document.getElementById(current_grid_id).remove()
    main.append(create_grid_folder(future_grid_id, new_folder))
}

base_site_element.addEventListener('click', async() => {
    elements_class_manipulation(document.querySelectorAll('.grid-element'), 'gird-element-animation-in', 1)
    await sleep(.1)
    elements_class_manipulation(document.querySelectorAll('.grid-element'), 'gird-element-animation-out', 0)
    await sleep(.65)
    switch_grid('grid_folder_main', 'grid_folder_new_base')
    elements_class_manipulation(document.querySelectorAll('.grid-element'), 'gird-element-animation-in', 0)

    document.getElementById('go_back').addEventListener('click', async() => {
        elements_class_manipulation(document.querySelectorAll('.grid-element'), 'gird-element-animation-in', 1)
        elements_class_manipulation(document.querySelectorAll('.grid-element'), 'gird-element-animation-out', 1)
        await sleep(.1)
        elements_class_manipulation(document.querySelectorAll('.grid-element'), 'gird-element-animation-out', 0)
        await sleep(.65)
        document.getElementById('grid_folder_new_base').remove();
        main.append(initial_div)
        elements_class_manipulation(document.querySelectorAll('.grid-element'), 'gird-element-animation-in', 0)
        await sleep(.1)
        elements_class_manipulation(document.querySelectorAll('.grid-element'), 'gird-element-animation-out', 1)
    })
})