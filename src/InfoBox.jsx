import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import GrainIcon from '@mui/icons-material/Grain';
import SevereColdIcon from '@mui/icons-material/SevereCold';

export default function InfoBox({info}){
    const INIT_URL=
    "https://images.unsplash.com/photo-1633120851371-403ecc2d81ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVzdHklMjB3aW5kfGVufDB8fDB8fHww"
    
    const HOT_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwZGF5fGVufDB8fDB8fHww";
    const COLD_URL="https://images.unsplash.com/photo-1621271497195-19433985c20b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZGRheXxlbnwwfHwwfHx8MA%3D%3D";
    const RAINY_URL="https://images.unsplash.com/photo-1623567932970-576132e5d056?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D";

    return(
    <div className="InfoBox">
     
        <div className='cardcontainer'>
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity>80
            ? RAINY_URL
            :info.temp>15
            ?HOT_URL
            :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
             info.humidity>80
            ? <GrainIcon/>
            :info.temp>15
            ?<SunnyIcon/>
            :<SevereColdIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
           <p>Temperature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Minimum Temperature = {info.tempMin}&deg;C</p>
           <p>Maximum Temperature = {info.tempMax}&deg;C</p>
           <p>The weather can be described as <b>{info.weather}</b> and feelsLike  {info.feelslike}&deg;C</p>
           
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}