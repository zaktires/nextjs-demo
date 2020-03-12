export const isValidSize =  ({width = null, ratio = null, rim = null} = props) => {
    if (width === null || ratio === null || rim === null) return false;
    if (parseInt(width, 10) === NaN || parseInt(ratio, 10) === NaN || parseInt(rim, 10) === NaN) return false;

    return true;
}

export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  