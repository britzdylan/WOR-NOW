import React from 'react';
import Layout from '../components/mainLayout/layout';
import client from '../components/ApolloClient';
import GET_ALL from '../queries/GET_ALL'
import { get1000Products } from "../api/products";

const CSVFunc = (props) => {
    const { product } = props;
    console.log(product);

    const convertToCSV = (objArray) => {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';

        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }

            str += line + '\r\n';
        }

        return str;
    }

    function exportCSVFile(headers, items, fileTitle) {
        if (headers) {
            items.unshift(headers);
        }

        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);

        var csv = convertToCSV(jsonObject);

        var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, exportedFilenmae);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", exportedFilenmae);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }

    function download() {


        const headers = {
            id: 'id'.replace(/,/g, ''), // remove commas to avoid errors
            title: "title",
            description: "description",
            google_product_category: "google_product_category",
            availability: "availability",
            condition: "condition",
            price: "price",
            link: "link",
            image_link: "image_link",
            brand: "brand"
        };

        const itemsNotFormatted = [];

        product.forEach((item, index) => {
            const title = item.node.name.charAt(0).toUpperCase() + item.node.name.slice(1).toLowerCase()
            const initPrice = item.node.regularPrice;
            const checkforCommas = /[,]/.test(initPrice);
            const checkforDashes = /[-]/.test(initPrice);
            //const price = checkforCommas ? initPrice.replace(',', '') : initPrice
            console.log(title, index);

            const arrPrice = checkforDashes ? initPrice.split("-") : initPrice
            let newPrice = "";
            if (Array.isArray(arrPrice)) {
                newPrice = arrPrice[1]
            } else {
                newPrice = arrPrice
            }
            const commaRemovedPrice = checkforCommas ? newPrice.replace(',', '') : newPrice
            const finalPrice = commaRemovedPrice;


            //const finalPrice = checkforDashes ? arrPrice[1] : price
            const brand = item.node.productTags.nodes.length != 0 ? item.node.productTags.nodes[0].name : "WorldofRugby"
            itemsNotFormatted.push({
                id: item.node.productId,
                title: title,
                description: `Get the ${title} at WorldofRugby with nation wide shipping and fast and secure online shopping.`,
                google_product_category: "1110",
                availability: "in stock",
                condition: "new",
                price: `${finalPrice} ZAR`,
                link: `https://www.worldofrugby.co.za/shop/product/${item.node.slug}?id=${item.node.productId}&type=${item.node.__typename}`,
                image_link: `${item.node.image != null ? item.node.image.sourceUrl : "https://www.worldofrugby.co.za/placeholder-image.jpg"}`,
                brand: brand
            })
        })
        const itemsFormatted = [];

        // format the data
        if (itemsNotFormatted.length >= 1) {
            console.log(itemsNotFormatted);

            itemsNotFormatted.forEach((item) => {
                itemsFormatted.push({
                    id: item.id, // remove commas to avoid errors
                    title: item.title,
                    description: item.description,
                    google_product_category: item.google_product_category,
                    availability: item.availability,
                    condition: item.condition,
                    price: item.price,
                    link: item.link,
                    image_link: item.image_link,
                    brand: item.brand
                });
            });
        }
        const fileTitle = 'products'; // or 'my-unique-title'

        exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
    }


    return (
        <Layout><div onClick={download}>
            < p > file_download</p >
            <p>Download Demo CSV File</p>
        </div ></Layout>

    )
};

CSVFunc.getInitialProps = async function (context) {
    const result = await get1000Products();
    return {
        product: result.data.products.edges
    }
}

export default CSVFunc;


