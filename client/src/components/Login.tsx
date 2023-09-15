import {
  Box,
  Button,
  Checkbox,
  Image,
  Input,
  InputGroup,
  Text,
  InputRightElement,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { PiEyeClosedLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { dataLogin } from "../data/loginData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [hide, setHide] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [save, setSave] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const rememberedUsername = localStorage.getItem("rememberedUsername");
    const rememberedPassword = localStorage.getItem("rememberedPassword");
    if (rememberedUsername && rememberedPassword) {
      setUsername(rememberedUsername);
      setPassword(rememberedPassword);
    }
  }, []);

  const handleHide = () => {
    setHide(!hide);
  };

  const decideSave = () => {
    if (save) {
      localStorage.setItem("rememberedUsername", username);
      localStorage.setItem("rememberedPassword", password);
    } else {
      setSave(false);
    }
  };

  const handleSave = () => {
    setSave(!save);
  };

  const handleSubmit = () => {
    if (username.length > 0 && password.length > 0) {
      setTimeout(() => {
        navigate("/home");
      }, 2000);
      decideSave();
    } else {
      setError("Por favor llena los campos solicitados");
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  return (
    <>
      <Box display="flex">
        <Box position="relative">
          <Image src={dataLogin.image} />
          <Box
            position="absolute"
            top="70%"
            left="38%"
            transform="translate(-50%, -50%)"
          >
            <Text color="#ffffff" fontSize="40px">
              Bienvenido a la mejor plataforma
            </Text>
            <Text mt="-10px" fontWeight="500" color="#ffffff" fontSize="40px">
              organizacional online.
            </Text>
            <Text mt="20px" color="#ffffff" fontSize="32px">
              Gestion efectiva del talento humano
            </Text>
          </Box>
        </Box>
        <Box
          width="724px"
          display="block"
          alignItems="center"
          justifyContent="center"
          padding="100px"
        >
          <Image src={dataLogin.logo} pb="40px" />
          <FormControl>
            <FormLabel
              fontWeight="400"
              ml="-8px"
              mt="40px"
              mb="8px"
              fontSize="14px"
            >
              Usuario
            </FormLabel>
            <Input
              borderRadius="20px"
              type="text"
              value={username}
              placeholder="Ingresa tu nombre de usuario"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel
              fontWeight="400"
              ml="-8px"
              fontSize="14px"
              mt="30px"
              mb="8px"
            >
              Contraseña
            </FormLabel>
            <InputGroup>
              <Input
                borderRadius="20px"
                type={!hide ? "password" : "text"}
                value={password}
                placeholder="Escribe tu contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement
                onClick={handleHide}
                children={hide ? <PiEyeLight /> : <PiEyeClosedLight />}
                width="40px"
                pr="14px"
                _hover={{ cursor: "pointer" }}
              />
            </InputGroup>
          </FormControl>
          {error && (
            <Text textAlign="center" mt="8px" fontSize="12px" color="red.400">
              {error}
            </Text>
          )}
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Checkbox
              fontWeight="400"
              mt="30px"
              mb="30px"
              fontSize="14px"
              onChange={handleSave}
            >
              Recordar cuenta
            </Checkbox>
            <Button
              mt="10px"
              borderRadius="20px"
              width="100%"
              bgColor="#3737EC"
              color="#ffffff"
              onClick={handleSubmit}
              type="submit"
            >
              Iniciar sesión
            </Button>
          </Box>
          <Box>
            <Box display="flex" justifyContent="space-between" mt="15px">
              <Text
                color="#989898"
                fontSize="11px"
                _hover={{ cursor: "pointer", opacity: "0.4" }}
              >
                ¿Olvidaste tu usuario?
              </Text>
              <Text
                color="#989898"
                fontSize="11px"
                _hover={{ cursor: "pointer", opacity: "0.4" }}
              >
                ¿Olvidaste tu contraseña?
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
