export const handleIconClick = (clickOn) => {
    switch (clickOn) {
        case "meeting":
            console.log("meeting")
            break
        case "notes":
            console.log("note")
            break
        case "media":
            console.log("media")
            break
        case "document":
            console.log("doc")
            break
        case "directShare":
            console.log("direct")
            break
        case "schedule":
            console.log("sche")
            break
        case "reminder":
            console.log("rema")
            break
        case "payment":
            console.log("pay")
            break
        default:
            console.log("default")
            break
    }

}