import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from '../../dist/seed/interfaces/pokemon-response';
import { PokemonService } from '../pokemon/pokemon.service';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { FetchAdapter } from 'src/common/adapters/fetch.adapter';

@Injectable()
export class SeedService {

  private readonly axios:AxiosInstance = axios;
  
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    // private readonly http:AxiosAdapter,
    private readonly http:FetchAdapter,
  ){};

  async executeSeed(){
    await this.pokemonModel.deleteMany({});

    const data =await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=600')
    
    // const insertPromisesArray = [];
    const pokemonToInsert: {name:string,no:number}[] =[];
    
    data.results.forEach(async({name,url})=>{
      const segments = url.split('/');
      const no = +segments[segments.length-2]
      console.log({name,no})
      // insertPromisesArray.push(
      //   this.pokemonModel.create({name,no})
      // )
      pokemonToInsert.push({name,no})
    });
    // await Promise.all(insertPromisesArray);
    await this.pokemonModel.insertMany(pokemonToInsert);
    return 'Seed executed';
  }
}
