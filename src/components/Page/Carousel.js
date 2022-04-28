import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
const MAE = styled.div``;
const CONTAINER = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9vw;
  img {
    padding: 2vw;
    width: 25vw;
    height: 20vw;
  }
  h3,
  h2 {
    color: white;
    margin-left: 2vw;
    font-weight: 400;
  }
  h3 {
    font-size: 1vw;
    padding: 1vw;
  }
  h2 {
    margin-top: -2vw;
  }
`;
const CONTAINER2 = styled.div`
  color: white;
  width: 100%;
  margin-bottom: -10vw;
  p {
    width: 2vw;
    margin-top: 5vw;
  }
`;

const PESQ = styled.input`
  width: 10vw;
  height: 3vw;
  border-radius: 5px 5px 5px 5px;
  color: white;
  margin-top: -0.4vw;
  font-size: 1vw;
  background: red;
`;
const BUT = styled.input`
  width: 27vw;
  height: 2vw;
  margin-left: vw;
  background: #2c2c2c;
  font-size: 1vw;
  border-radius: 0.5vw;
  color: white;
`;
const FILHA = styled.div`
  
  display: flex;
  justify-content:space-around;
  justify-content:end;
  margin-top: -0.1vw;
  position:absolute;
  left:60%;
  top:1vw;
`;
const ContainerBusca = styled.div`
  display: flex;

  width: 80vw;
  background-color: #5c5c5c;
  border: none;
  border-radius: 0.4vw;
  flex-wrap: wrap;
  margin-left: 8vw;
  justify-content: center;
  align-items: top;
`;
const BoxBusca = styled.div`
  width: 25vw;
  margin-top: 3vw;
  margin-bottom: 3vw;
  background-color: #3c3c3c;
  text-align: center;
  padding: 0.5vw;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  border-radius: 0.5vw;
  padding-top: 1.3vw;
`;
const CaixaBusca = styled.div`
  background-color: #3c3c3c;
  display:flex;
`;

const Procurar = styled.input`
  background-color: #3c3c3c;
  background-image: url("https://www.seekpng.com/png/full/920-9209972_magnifying-glass-png-white-search-icon-white-png.png");
  background-repeat: no-repeat;
  background-size: 1.5vw;
  background-position: 1vw 0.5vw;
  border: none;
  width: 29.282576866764277vw;
  height: 5.333333333333333vh;
  border-radius: 0.4vw;
  font-size: 1.2vw;
  font-weight: 500;
  color: white;
  position: absolute;
  top: 2.3vw;
  right: 9.7vw;
  padding-left: 3.5vw;
  padding-bottom: 0.01vw;
`;

const Movie = styled.div`
 display:flex;
  padding-left: 4vw;
  margin-top: 15.220700152207002vh;
   
  align-items: center;
  margin-bottom: 11.567732115677321vh;
`;
const TituloBusca = styled.h2`
  font-size: 3vh;
  font-weight: bold;
  background-color: #3c3c3c;
`;

const ImagemBusca = styled.img`
  width: 23vw;
  height: 17vw;

  border-radius: 0.4vw;
`;

const DescricaoBusca = styled.p`
  font-size: 2vh;
  background-color: #3c3c3c;
  margin-top: 0.5vw;
`;

const ImageMovie = styled.img`
  width: 31.112737920937043vw;
  height: 36.83409436834094vh;
  margin-right: 3.513909224011713vw;
display:flex;
  border-radius: 0.4vw 0.4vw 0.4vw 0.4vw;
`;
const BoxMovie = styled.div`
  
  width:28.5vw ;
`;
const TitleMovie = styled.h2`
  font-size: 6.0882800608828vh;
  font-weight: bold;
  color:white;
`;
const DescricaoMovie = styled.p`
  font-size: 2.13089802130898vh;
  font-weight: regular;
  padding-top: 1.21765601217656vh;
  color:white;
`;

const MovieH = styled.h4`
 font-size: 2.43531202435312vh;
  font-weight: bold;
  color:white;
  `
  const BotaoCarousel = styled.button`
  border: none;
  background-color: #2c2c2c;
  border-radius: 50%;
  opacity: 50%;
  cursor: pointer;`



export default class App extends React.Component {
  state = {
    buscar: [],

    listMovies: [
      {
        title: "shrek 2",
        overview:
          "Shrek e Fiona acabaram de voltar da lua de mel e vivem felizes em sua casa no pântano. O casal recebe um convite dos pais da princesa, que querem conhecer o novo genro, para um jantar no castelo. Eles ficaram sabendo que Fiona havia se casado com o seu verdadeiro amor, mas o que eles ainda não sabem é que este amor é um ogro mal-educado de mais de 300 quilos, que conta com um burro falante como melhor amigo.",

        poster:
          "https://upload.wikimedia.org/wikipedia/pt/7/78/Shrek_2_Poster.jpg"
      },
      {
        title: "Enrolados",
        overview:
          "O bandido mais procurado do reino, Flynn Rider, se esconde em uma torre e acaba prisioneiro de Rapunzel, residente de longa data do local. Dona de cabelos dourados e mágicos com 21 metros de comprimento, ela está trancada há anos e deseja desesperadamente a liberdade. A adolescente determinada faz um acordo com o rapaz, e, juntos, partem para uma aventura emocionante",

        poster:
          "https://upload.wikimedia.org/wikipedia/pt/9/99/Tangled_Disney.jpg"
      },
      {
        title: "Carros 2",
        overview:
          "O astro das corridas, Relâmpago McQueen, e o carro-guincho, Mate, viajam para disputar o primeiro Grand Prix Mundial, que irá revelar o carro mais veloz do planeta. Nessa jornada imperdível, Mate se envolve com um grupo de espionagem e vive grandes aventuras com seus amigos.",

        poster:
          "https://upload.wikimedia.org/wikipedia/pt/7/7e/Carros_2_P%C3%B4ster.jpg"
      },
      {
        title: "Frozen",
        overview:
          "Acompanhada por um vendedor de gelo, a jovem e destemida princesa Anna parte em uma jornada por perigosas montanhas de gelo na esperança de encontrar sua irmã, a rainha Elsa, e acabar com a terrível maldição de inverno eterno, que está provocando o congelamento do reino",

        poster: "https://upload.wikimedia.org/wikipedia/pt/e/e5/Frozen_2013.png"
      },
      {
        title: "Moana",
        overview:
          "Uma jovem parte em uma missão para salvar seu povo. Durante a jornada, Moana conhece o outrora poderoso semideus Maui, que a guia em sua busca para se tornar uma mestre em encontrar caminhos. Juntos, eles navegam pelo oceano em uma viagem incrível.",

        poster:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGT5Qbj1vt1y-S1-YgSpwEL2XVSgQ1iNvOeA26qzd2V0bs1tTQ"
      },
      {
        title:"O rei leao",
        overview:
        "Este desenho animado da Disney mostra as aventuras de um leão jovem de nome Simba, o herdeiro de seu pai, Mufasa. O tio malvado de Simba, Oscar, planeja roubar o trono de Mufasa atraindo pai e filho para uma emboscada. Simba consegue escapar e somente Mufasa morre. Com a ajuda de seus amigos,Timon e Pumba, ele reaparece como adulto para recuperar sua terra, que foi roubada por seu tio Oscar.",
        
        poster:"https://m.media-amazon.com/images/I/517DF3O-d5L.jpg"  
      }
      
    ],
    
  };
  handleChange = (e) => {
    if (e.target.value !== "") {
      this.setState({
        buscar: this.state.listMovies.filter((item) => {
          if (
            item.title.toLowerCase().includes(e.target.value.toLowerCase())
          ) {
            return true;
          }
        })
      });
    } else {
      this.setState({
        buscar: []
      });
    }
  };

  render() {
    return (
      <>
 <ContainerBusca>
          {this.state.buscar.map((item) => (
            <BoxBusca>
              <ImagemBusca src={item.poster} />
              <CaixaBusca>
                <TituloBusca>{item.title}</TituloBusca>
                <DescricaoBusca>{item.overview}</DescricaoBusca>
              </CaixaBusca>
            </BoxBusca>
          ))}
        </ContainerBusca>
        <Movie>
          <BoxMovie>
            <ImageMovie src={this.state.listMovies[5].poster}
            />
            <MovieH>visto recentemente</MovieH>
            <TitleMovie>{this.state.listMovies[5].title}</TitleMovie>
            <DescricaoMovie>{this.state.listMovies[5].overview}</DescricaoMovie>
            </BoxMovie>
            </Movie>

      <FILHA>
            <PESQ type="button" value="Adicionar filme"/>
            <BUT 
            placeholder="Pesquisar"
            onChange={this.handleChange}  ></BUT>
          </FILHA>
          
        <CONTAINER2>
          <p>destaques</p>
        </CONTAINER2>

        <CONTAINER>
          <Carousel wrapAround={true}
            adaptiveHeight={true}
            wrapAround={true}
            slidesToShow={5}
            autoplay={true}>
            
            {this.state.listMovies.map((item) => (
              <MAE>
                <img src={item.poster} />

                <div>
                  <h2> {item.title} </h2>
                  <h3> {item.overview} </h3>
                </div>
              </MAE>

            ))}
          </Carousel>
          
        </CONTAINER>
      </>
    );
  }
}
