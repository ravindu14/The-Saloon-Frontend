// @flow
import React, { useEffect, useState } from 'react';
import { styled } from 'baseui';
import { Input } from 'baseui/input';
import { Textarea } from 'baseui/textarea';
import { Button, KIND } from 'baseui/button';
import { Skeleton } from 'baseui/skeleton';
import { useSelector, useDispatch } from 'react-redux';
import {
  type AsyncStatusType,
  type NotificationType,
} from 'shared/types/General';
import Layout from '../../components/layout';
import { InputStyles } from 'styledComponents';
import { GoPrimitiveDot } from 'react-icons/go';
import { createService, getAllServices } from 'action/merchant';
import { ASYNC_STATUS } from 'constants/async';
import { isEven } from 'shared/helpers/utils';
import { Modal, ROLE, ModalHeader, ModalBody, ModalFooter } from 'baseui/modal';
import { MdAddCircle } from 'react-icons/md';
import { v4 } from 'uuid';

const PageHeaderContainer = styled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const PageHeader = styled('div', ({ $theme }) => ({
  fontSize: '2rem',
  marginTop: '50px',
  color: $theme.colors.accent50,
  fontWeight: 600,
}));

const PageDescription = styled('p', ({ $theme }) => ({
  fontSize: '1rem',
}));

const PageContent = styled('div', ({ $theme }) => ({
  width: '100%',
}));

const Table = styled('table', ({ $theme }: any) => ({
  width: '100%',
  color: '#707070',
  lineHeight: '2rem',
}));

const TableHeading = styled('div', ({ $theme }: any) => ({
  color: '#ffffff',
  fontWeight: 700,
}));

const Td = styled('td', ({ $theme }) => ({
  padding: '10px',
  color: $theme.colors.accent,
  minWidth: '20%',
}));

const Tr = styled('tr', ({ $index }: any) => ({
  backgroundColor: isEven($index) ? '#f5f5f5' : '#ffffff',
}));

const HeaderRow = styled('tr', ({ $theme }) => ({
  backgroundColor: '#179926',
}));

const ContentContainer = styled('div', ({ $theme }: any) => ({
  height: '65vh',
  overflow: 'auto',
}));

const ButtonContainer = styled('div', () => ({
  display: 'flex',
  justifyContent: 'space-between',
  height: '2.5rem',
}));

const HeaderText = styled('div', () => ({
  fontSize: '1.5rem',
  color: '#000000',
  fontWeight: '600',
}));

const InputRow = styled('div', () => ({
  marginBottom: '10px',
}));

const InputLabel = styled('label', () => ({
  fontSize: '0.8rem',
}));

const MerchantServices = () => {
  const { status: loading, services } = useSelector(state => state.merchant);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  const onClickSave = () => {
    const newService = {
      id: v4(),
      name,
      duration,
      price,
      description,
    };

    dispatch(createService(newService));
    setIsOpen(false);
  };

  const getContent = () => {
    if (loading === ASYNC_STATUS.LOADING) {
      return (
        <tr>
          <td colSpan={4}>
            <Skeleton
              rows={5}
              width="100%"
              animation
              overrides={{
                Row: {
                  style: () => ({
                    height: '40px',
                    marginBottom: '20px',
                    marginTop: '20px',
                  }),
                },
              }}
            />
          </td>
        </tr>
      );
    }

    if (services && services.length > 0) {
      return services.map(({ name, duration, price, description }, index) => (
        <Tr $index={index} key={name}>
          <Td>{name}</Td>
          <Td>{duration}</Td>
          <Td>{price}</Td>
          <Td>{description}</Td>
        </Tr>
      ));
    }
  };

  return (
    <Layout>
      <PageHeaderContainer>
        <PageHeader>What your business provides for customers</PageHeader>
        <div>
          <Button
            kind={KIND.primary}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  padding: '10px 20px',
                }),
              },
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdAddCircle />
            Add service
          </Button>
        </div>
      </PageHeaderContainer>
      <PageDescription>
        This is your services page. You can add services that you can provide to
        your customers. Customers can get an idea about the service and make
        appropreate appointments.
      </PageDescription>
      <PageContent>
        <Table>
          <thead>
            <HeaderRow>
              <Td>
                <TableHeading>Service Name</TableHeading>
              </Td>
              <Td>
                <TableHeading>{'Duration (minutes)'}</TableHeading>
              </Td>
              <Td>
                <TableHeading>{'Price (AUD)'}</TableHeading>
              </Td>
              <Td>
                <TableHeading>Description</TableHeading>
              </Td>
            </HeaderRow>
          </thead>
          <tbody>{getContent()}</tbody>
        </Table>
        <Modal
          onClose={() => setIsOpen(false)}
          closeable
          isOpen={isOpen}
          animate
          autoFocus
          overrides={{
            Root: {
              style: () => ({
                zIndex: 999,
              }),
            },
            Dialog: {
              style: ({ $theme }) => ({
                width: '31%',
              }),
            },
          }}
        >
          <ModalHeader>
            <HeaderText>Create new service</HeaderText>
          </ModalHeader>
          <ModalBody>
            <ContentContainer>
              <InputRow>
                <InputLabel>User Name</InputLabel>
                <Input
                  value={name}
                  onChange={event => setName(event.currentTarget.value)}
                  placeholder="Service Name"
                  overrides={{ ...InputStyles }}
                />
              </InputRow>
              <InputRow>
                <InputLabel>Time Duration</InputLabel>
                <Input
                  value={duration}
                  type="number"
                  onChange={event => setDuration(event.currentTarget.value)}
                  placeholder="Duration"
                  overrides={{ ...InputStyles }}
                />
              </InputRow>
              <InputRow>
                <InputLabel>Price</InputLabel>
                <Input
                  value={price}
                  type="number"
                  onChange={event => setPrice(event.currentTarget.value)}
                  placeholder="Price"
                  overrides={{ ...InputStyles }}
                />
              </InputRow>
              <InputRow>
                <InputLabel>Description</InputLabel>
                <Textarea
                  value={description}
                  onChange={event => setDescription(event.currentTarget.value)}
                  overrides={{ ...InputStyles }}
                />
              </InputRow>
            </ContentContainer>
          </ModalBody>
          <ModalFooter>
            <ButtonContainer>
              <Button
                kind={KIND.secondary}
                overrides={{
                  BaseButton: {
                    style: () => ({
                      outline: '1px solid #bababa',
                      borderRadius: '10px',
                      width: '48%',
                    }),
                  },
                }}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                kind={KIND.primary}
                overrides={{
                  BaseButton: {
                    style: () => ({ borderRadius: '10px', width: '48%' }),
                  },
                }}
                onClick={onClickSave}
              >
                Save
              </Button>
            </ButtonContainer>
          </ModalFooter>
        </Modal>
      </PageContent>
    </Layout>
  );
};

export default MerchantServices;
