import React from "react";
import { RegisterBg } from "../../Assets";
import { Link } from "../../componenets";
import "./detailBlog.scss";
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-wraper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post </p>
      <p className="blog-body">
        Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan
        penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar
        contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak
        dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi
        sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad
      </p>
      <Link tittle="Kembali Ke Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
