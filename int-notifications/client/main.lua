RegisterCommand('TestNotifications', function()
    TriggerEvent('int-notifications:add', {
        title = 'Bank',
        type = 'success',
        message = 'Your account has been credited with $100',
    })

    TriggerEvent('int-notifications:add', {
        title = 'Bank',
        type = 'error',
        message = 'Your account has been debited with $100',
    })

    TriggerEvent('int-notifications:add', {
        title = 'Bank',
        type = 'warning',
        message = 'Your account has been debited with $100',
    })

    TriggerEvent('int-notifications:add', {
        title = 'Bank',
        type = 'info',
        message = 'Your account has been debited with $100',
    })
end)

RegisterNetEvent('int-notifications:add')
AddEventHandler('int-notifications:add', function( data )
    SendNUIMessage({
        type = 'createNotification',
        payload = {
            id = data.id,
            title = data.title,
            color = data.color,
            radius = data.radius,
            message = data.message,
            loading = data.loading,
            notificationType = data.type,
        }
    })
end)

RegisterNetEvent('int-notifications:update')
AddEventHandler('int-notifications:update', function( data )
    SendNUIMessage({
        type = 'updateNotification',
        payload = {
            id = data.id,
            title = data.title,
            color = data.color,
            radius = data.radius,
            message = data.message,
            loading = data.loading,
            notificationType = data.type,
        }
    })
end)

RegisterNetEvent('int-notifications:remove')
AddEventHandler('int-notifications:remove', function( id )
    SendNUIMessage({
        type = 'removeNotification',
        id = id
    })
end)

RegisterNetEvent('int-notifications:clearQueue')
AddEventHandler('int-notifications:clearQueue', function()
    SendNUIMessage({
        type = 'clearQueue'
    })
end)

RegisterNetEvent('int-notifications:removeAll')
AddEventHandler('int-notifications:removeAll', function()
    SendNUIMessage({
        type = 'removeAll'
    })
end)