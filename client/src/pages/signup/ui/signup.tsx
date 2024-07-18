import {
  Box,
  Card,
  Flex,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { InputButton } from "../components/inputButton";
import { Link } from "react-router-dom";

export const Signup = () => {
  const form = useForm({
    initialValues: {
      login: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      login: (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
        /^\+?[\d\s]{3,}$/.test(value)
          ? null
          : "Введите корректный email или телефон",
      password: (value) =>
        (value.length < 6 ? "Вы ввели слишком короткий пароль" : null) ||
        (value.length > 15 ? "Вы ввели слишком длинный пароль" : null),
      confirmPassword: (value, values) =>
        (value.length < 6 ? "Вы ввели слишком короткий пароль" : null) ||
        (value.length > 15 ? "Вы ввели слишком длинный пароль" : null) ||
        (value !== values.password ? "Введенные пароли не совпадают" : null),
    },
  });

  const stylesInput = {
    borderColor: "var(--mantine-color-gray-9)",
    backgroundColor: "var(--mantine-color-gray-8)",
    color: "var(--mantine-color-orange-0)",
  };

  return (
    <Flex maw={1440} bg="var(--mantine-color-gray-9)" mx="auto" h={"80vh"}>
      <Box mx="auto" w="60%">
        <Card
          maw={530}
          w="100%"
          mt={300}
          mx="auto"
          bg="var(--mantine-color-gray-7)"
          shadow="md"
          padding="lg"
          radius="md"
        >
          <Box maw={529} mx="auto">
            <Title order={3} c="white">
              РЕГИСТРАЦИЯ
            </Title>
          </Box>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              pt={16}
              label={
                <Text c="white" pb={6}>
                  Логин
                </Text>
              }
              placeholder="Email или телефон"
              {...form.getInputProps("login")}
              styles={{ input: stylesInput }}
            />
            <PasswordInput
              pt={16}
              label={
                <Text c="white" pb={6}>
                  Пароль
                </Text>
              }
              placeholder="Пароль"
              {...form.getInputProps("password")}
              styles={{ input: stylesInput }}
            />
            <PasswordInput
              pt={16}
              label={
                <Text c="white" pb={6}>
                  Подтверждение пароля
                </Text>
              }
              placeholder="Повторите пароль"
              {...form.getInputProps("confirmPassword")}
              styles={{ input: stylesInput }}
            />
            <Box mt="xl" mb="sm" ta="center">
              <InputButton>Регистрация</InputButton>
            </Box>
          </form>
          <Box mb="sm" ta="center">
            <Text c="white">
              Уже есть аккаунт?&nbsp;
              <Link to="/login">
                <Text c="var(--mantine-color-red-6)" span>
                  &nbsp;Войти
                </Text>
              </Link>
            </Text>
          </Box>
        </Card>
      </Box>
    </Flex>
  );
};
