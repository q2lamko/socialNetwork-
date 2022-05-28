
export const updateObjectInArray = (items:any, itemId: number, objPropName: string, newObjProps: any) => {
    return items.map((e: { [x: string]: number; }) => {
        if (e[objPropName] === itemId) {
            return {...e, ...newObjProps};
        }
        return e;
    })
}
