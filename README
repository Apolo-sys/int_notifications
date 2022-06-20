-# int_notifications

Fivem notifications system using [Mantine](https://mantine.dev/) framework and [ReactIcons](https://react-icons.github.io/react-icons/).

![Screenshots are here](https://i.imgur.com/WIDXDWt.png)

## Installation

- Donwload the lat [Release](https://github.com/GPeaky/int-notifications/releases/tag/1.0.0)
- Unzip the folder
- Drag and drop the `int_notifications` into your resources folder
- Don´t forget to add `ensure int_notifications` in your `server.cfg`

## Arguments

**id** = String, id of the notification, you can use it to update/remove it - Not required
**title** = String, title of the notification - Not required
**message** = String, message you want to show up - Not required if you provide a title
**radius** = String, radius of the notification - Not required / Types  'xs' | 'sm' | 'md' | 'lg' | 'xl'
**color** = String, Color of the notification - Not required / if you put a type this will be ignored
**loading** = Boolean, show a loading animation - Not required
**type** = String, type of the notification - Not required / Types  'info' | 'success' | 'warning' | 'error'

## Use

**Default**
```lua
    TriggerEvent('int_notifications:add', {
        type,
        title,
        message
    })
```

**Server**
```lua
    TriggerClientEvent('int_notifications:add', source, {
        type,
        title,
        message
    })
```

## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)