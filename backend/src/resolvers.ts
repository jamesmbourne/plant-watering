import { Plant, Resolvers, Schedule } from "./generated/graphql";
import { log } from "./handler";
import uuid from "uuid/v4";

// import DynamoDB from "aws-sdk/clients/dynamodb";
// import AWSXRay from "aws-xray-sdk";
// const DynamoDBXRay = AWSXRay.captureAWSClient(DynamoDB);

// const docClient = new DynamoDBXRay.DocumentClient();

class PlantRepo {
  private plants: Plant[];

  private plantSchedule: Map<string, Schedule>;

  constructor() {
    this.plants = [
      {
        id: "7cbb7272-229b-400e-b411-1f539cd27bf5",
        name: "steve",
        species: "monstera deliciosa"
      },
      {
        id: "37c51741-2b0e-4b92-a1d4-0ee222fc3454",
        name: "bob",
        species: "cactus"
      },
      {
        id: "fd3e385e-743c-4a74-b67d-dc0bec4555c9",
        name: "henry",
        species: "hawthorn"
      },
      {
        id: "b1d90890-feed-4e95-8639-feb03de6def9",
        name: "andy",
        species: "amaryllis"
      },
      {
        id: "9fea5788-5bcb-4474-a01b-dada7761981f",
        name: "oliver",
        species: "orchid"
      }
    ];

    this.plantSchedule = new Map([
      [
        this.plants[0].id,
        {
          id: "9fea5788-5bcb-4474-a01b-dada7761981f",
          date: new Date().toISOString()
        }
      ],
      [
        this.plants[3].id,
        {
          id: "b1d90890-feed-4e95-8639-feb03de6def9",
          date: new Date().toISOString()
        }
      ]
    ]);
  }

  public getAll() {
    return this.plants;
  }

  public getPlant(id: string) {
    return this.plants.find(p => p.id === id) || null;
  }

  public getSchedule(plantId: string) {
    return this.plantSchedule.get(plantId) || null;
  }

  public createPlant({ name, species }: { name: string; species: string }) {
    const plant = { id: uuid(), name, species };
    this.plants.push(plant);

    return plant;
  }

  public deletePlant({ id }: { id: string }) {
    const plant = this.getPlant(id);
    this.plants = this.plants.filter(p => p.id !== id);

    return plant;
  }
}

const repo = new PlantRepo();

export const resolvers: Resolvers = {
  Query: {
    plants: async (_root, _args) => {
      return repo.getAll();
    },
    plant: async (_root, { id }) => {
      return repo.getPlant(id);
    }
  },
  Plant: {
    schedule: async plant => {
      log.info({ plant });

      return repo.getSchedule(plant.id);
    }
  },
  Mutation: {
    CreatePlant: async (_root, { name, species }) => {
      return repo.createPlant({ name, species });
    },
    DeletePlant: async (_root, { id }) => {
      return repo.deletePlant({ id });
    }
  }
};
