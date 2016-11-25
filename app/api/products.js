// import PouchDB from 'pouchdb-browser';
import rawProducData from '../../db/prods/producs.all.json';

const productApi = {
  loadProducs: () => rawProducData
};

export default productApi;

// var db = new PouchDB('mydb');
