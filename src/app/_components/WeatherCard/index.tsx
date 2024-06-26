'use client';
import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import dayjs from 'dayjs';

interface WeatherProps {
  date: string;
  temp: number;
  wind: number;
  humidity: number;
  icon: string;
  description: string;
}

export default function WeatherCard({
  date,
  temp,
  wind,
  humidity,
  icon,
  description,
}: WeatherProps) {
  return (
    <>
      <Card className="transition-transform duration-500 ease-in-out transform hover:scale-105 grid  items-end justify-center text-center bg-cover bg-center rounded-large relative w-[220px] m-3 bg-blue-500">
        <CardBody className="pt-0">
          <CardHeader className="p-0">
            <p className="text-balance text-center">
              {dayjs(date).format('dddd')},<br></br>{' '}
              {dayjs(date).format('M/D/YYYY')}
            </p>
          </CardHeader>
          <div className="flex justify-center align-center">
            <p color="blue-gray" className="m-auto">
              {Math.ceil(temp)}&#8457;{' '}
            </p>
            <Image
              src={`https://openweathermap.org/img/wn/${icon}.png`}
              alt={description}
              className="m-auto"
              width={50}
              height={50}
              quality={100}
            />
          </div>
          <p color="blue-gray">Wind: {wind} mph</p>
          <p color="blue-gray">Humidity: {humidity}%</p>
        </CardBody>
      </Card>
    </>
  );
}
