import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Button, Row, Col } from 'react-bootstrap';


export default function NotFound() {
  return (
    <Row className='mt-4 justify-content-md-center'>
      <Col md={4}>
        <Card className='mt-4 p-4'>
          <h3 className='fw-bold text-center'>Essa página não existe.</h3>
          <Row className='my-4 justify-content-md-center'>
            <Col md={10}>
              <Image
                src='/404.png'
                alt='Not Found'
                width={283}
                height={178}
                layout='responsive'
              />
              <Link href='/restaurants'>
                <Button variant='outline-custom-red'>
                  <span className='fw-bold'>Retornar para lista de restaurantes.</span>
                </Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}
