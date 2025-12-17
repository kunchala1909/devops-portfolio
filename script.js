body {
  background-color: #0f172a;
  color: #e5e7eb;
  font-family: Arial, sans-serif;
  text-align: center;
  padding-top: 60px;
}

.fade {
  animation: fadeIn 2s ease-in;
}

.slide {
  animation: slideIn 1.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
