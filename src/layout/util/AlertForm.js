import swal from 'sweetalert';

export const AlertForm = (title , text , icon,) => {
swal({
  title,
  text,
  icon,
  button: " متوجه شدم عشقم",
})
}

// تین قطعه کد چون منتظر جواب می مونه promide خواهد بود
export const Confirm = (title, text) => {
  return swal({
    title: title,
    text: text,
    icon: "warning",
    buttons: ["خیر", "بله"], // اولی لغو، دومی تایید
    dangerMode: true,
  });
};