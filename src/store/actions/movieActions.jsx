import axios from '../../utils/axios';
import { loadmovie } from '../reducers/movieSlice';
export {removemovie} from "../reducers/movieSlice";


export const asyncloadmovie = (id) => async (dispatch , getState) => {
    try{
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations =await axios.get(`/movie/${id}/recommendations`);
        const similar =await axios.get(`/movie/${id}/similar`);
        const videos =await axios.get(`/movie/${id}/videos`);
        const watchproviders =await axios.get(`/movie/${id}/watch/providers`);

        let alldetails ={
            detail: detail.data,
            externalid: externalid.data,
            recommendation: recommendations.data.results,
            similar: similar.data.results,
            videos: videos.data.results.find(m => m.type === "Trailer"),
            watchproviders: watchproviders.data,
        };
        dispatch(loadmovie(alldetails))
        console.log(alldetails);

    }
    catch(error){
        console.log("Error:" , error)
    }
}