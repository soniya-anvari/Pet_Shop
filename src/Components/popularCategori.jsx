import { pupolar_Categories } from "../constant/Product";

function PopularCategori() {
  return (
    <div className='mt-16 '>
      <h3 className='text-center font-Iran_Bold text-clamp_des  '>
        در دسته‌بندی‌‌های محبوب‌ جستجو کنید
      </h3>
      <div className='flex mt-7 w-10/12 m-auto justify-center flex-wrap text-center'>
        {pupolar_Categories.map((categori) => (
          <div key={categori.id}>
            <img width='130px' src={categori.image} />
            <p>{categori.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategori;
